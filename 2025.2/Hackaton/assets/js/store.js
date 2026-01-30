/**
 * Store de Dados Simples usando LocalStorage
 * Gerencia Expositores, Produtos, Pedidos e Usuários
 */
const Store = {
    // Chaves
    KEYS: {
        EXHIBITORS: 'ifs_exhibitors',
        PRODUCTS: 'ifs_products',
        ORDERS: 'ifs_orders',
        USERS: 'ifs_users',
        CURRENT_USER: 'ifs_current_user',
        CART: 'ifs_cart'
    },

    init() {
        // Inicializa com arrays vazios se não existirem
        if (!localStorage.getItem(this.KEYS.EXHIBITORS)) localStorage.setItem(this.KEYS.EXHIBITORS, JSON.stringify([]));
        if (!localStorage.getItem(this.KEYS.PRODUCTS)) localStorage.setItem(this.KEYS.PRODUCTS, JSON.stringify([]));
        if (!localStorage.getItem(this.KEYS.ORDERS)) localStorage.setItem(this.KEYS.ORDERS, JSON.stringify([]));
        if (!localStorage.getItem(this.KEYS.CART)) localStorage.setItem(this.KEYS.CART, JSON.stringify([]));

        // Inicializa usuários com o usuário Admin padrão se vazio
        if (!localStorage.getItem(this.KEYS.USERS)) {
            const adminUser = {
                id: 1,
                username: 'admin',
                password: '123', // Em um app real, nunca armazene senhas em texto puro!
                role: 'ADMIN',
                name: 'Administrador IFS',
                exhibitorId: null
            };
            localStorage.setItem(this.KEYS.USERS, JSON.stringify([adminUser]));
        }

        console.log('Store inicializada');
    },

    // --- CART LOGIC ---
    getCart() {
        return this._get(this.KEYS.CART);
    },

    addToCart(item) {
        // item: { productId, name, price, quantity, exhibitorId, image }
        const cart = this._get(this.KEYS.CART);
        const existing = cart.find(i => i.productId == item.productId);
        if (existing) {
            existing.quantity += item.quantity;
        } else {
            cart.push(item);
        }
        this._save(this.KEYS.CART, cart);
    },

    removeFromCart(productId) {
        let cart = this._get(this.KEYS.CART);
        cart = cart.filter(i => i.productId != productId);
        this._save(this.KEYS.CART, cart);
    },

    updateCartItemQuantity(productId, newQty) {
        const cart = this._get(this.KEYS.CART);
        const item = cart.find(i => i.productId == productId);
        if (item) {
            item.quantity = newQty;
            if (item.quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                this._save(this.KEYS.CART, cart);
            }
        }
    },

    clearCart() {
        this._save(this.KEYS.CART, []);
    },

    _get(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    },

    _save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    },

    _add(key, item) {
        const data = this._get(key);
        item.id = Date.now(); // Geração de ID simples por timestamp
        item.createdAt = new Date().toISOString();
        data.push(item);
        this._save(key, data);
        return item;
    },

    // --- USUÁRIOS E AUTENTICAÇÃO ---
    getUsers() {
        return this._get(this.KEYS.USERS);
    },

    addUser(userData) {
        // userData: { username, password, role, name, exhibitorId }
        // Verifica se usuário já existe
        const users = this._get(this.KEYS.USERS);
        if (users.find(u => u.username === userData.username)) {
            throw new Error('Nome de usuário já existe.');
        }
        return this._add(this.KEYS.USERS, userData);
    },

    removeUser(id) {
        let users = this._get(this.KEYS.USERS);
        users = users.filter(u => u.id !== id);
        this._save(this.KEYS.USERS, users);
    },

    updateUser(id, data) {
        let users = this._get(this.KEYS.USERS);
        const index = users.findIndex(u => u.id == id);
        if (index > -1) {
            // Merge existing data with new data
            users[index] = { ...users[index], ...data };
            this._save(this.KEYS.USERS, users);
            return users[index];
        }
        return null;
    },

    login(username, password) {
        const users = this._get(this.KEYS.USERS);
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            // Salva na sessão (LocalStorage para persistir no reload)
            localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(user));
            return user;
        }
        return null;
    },

    logout() {
        localStorage.removeItem(this.KEYS.CURRENT_USER);
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.KEYS.CURRENT_USER));
    },

    // --- EXPOSITORES (EQUIPES) ---
    getExhibitors() {
        return this._get(this.KEYS.EXHIBITORS);
    },

    addExhibitor(data) {
        // data: { name, course, contact, description }
        return this._add(this.KEYS.EXHIBITORS, data);
    },

    removeExhibitor(id) {
        let exhibitors = this._get(this.KEYS.EXHIBITORS);
        exhibitors = exhibitors.filter(e => e.id !== id);
        this._save(this.KEYS.EXHIBITORS, exhibitors);

        // Optional: Remove linked products/users or handle manually?
        // For simple prototype, let's leave orphans or clean manually.
    },

    updateExhibitor(id, data) {
        let exhibitors = this._get(this.KEYS.EXHIBITORS);
        const index = exhibitors.findIndex(e => e.id == id);
        if (index > -1) {
            exhibitors[index] = { ...exhibitors[index], ...data };
            this._save(this.KEYS.EXHIBITORS, exhibitors);
            return exhibitors[index];
        }
        return null;
    },

    // --- PRODUTOS ---
    getProducts(exhibitorId = null) {
        const products = this._get(this.KEYS.PRODUCTS);
        if (exhibitorId) {
            return products.filter(p => p.exhibitorId == exhibitorId);
        }
        return products;
    },

    addProduct(data) {
        // data: { exhibitorId, name, description, price, stock, type }
        data.price = parseFloat(data.price);
        data.stock = parseInt(data.stock) || 0;
        // Ensure type is distinct, default to PRODUCT if missing
        if (!data.type) data.type = 'Produto';
        if (!data.unit) data.unit = 'un';
        return this._add(this.KEYS.PRODUCTS, data);
    },

    removeProduct(id) {
        let products = this._get(this.KEYS.PRODUCTS);
        products = products.filter(p => p.id !== id);
        this._save(this.KEYS.PRODUCTS, products);
    },

    updateProduct(id, data) {
        let products = this._get(this.KEYS.PRODUCTS);
        const index = products.findIndex(p => p.id == id);
        if (index > -1) {
            // Normalize numeric fields and defaults to avoid corrupting stored data
            const normalized = {
                ...data,
                price: parseFloat(data.price),
                stock: parseInt(data.stock) || 0,
                type: data.type || products[index].type || 'Produto',
                unit: data.unit || products[index].unit || 'un'
            };

            products[index] = { ...products[index], ...normalized };
            this._save(this.KEYS.PRODUCTS, products);
            return products[index];
        }
        return null;
    },

    updateProductStock(id, newStock) {
        const products = this._get(this.KEYS.PRODUCTS);
        const index = products.findIndex(p => p.id == id);
        if (index > -1) {
            products[index].stock = parseInt(newStock);
            this._save(this.KEYS.PRODUCTS, products);
        }
    },

    // --- PEDIDOS ---
    getOrders(exhibitorId = null, consumerId = null) {
        let orders = this._get(this.KEYS.ORDERS);
        if (exhibitorId) {
            orders = orders.filter(o => o.exhibitorId == exhibitorId);
        }
        if (consumerId) {
            orders = orders.filter(o => o.consumerId == consumerId);
        }
        return orders;
    },

    addOrder(data) {
        // data: { exhibitorId, consumerId, clientName, items: [{productId, quantity, unitPrice}], status: 'Novo' }
        data.status = 'Novo';

        // Calcular total
        data.totalValue = data.items.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);

        // Atualizar estoque
        const products = this._get(this.KEYS.PRODUCTS);
        data.items.forEach(item => {
            const productIndex = products.findIndex(p => p.id == item.productId);
            if (productIndex > -1) {
                products[productIndex].stock -= item.quantity;
            }
        });
        this._save(this.KEYS.PRODUCTS, products);

        return this._add(this.KEYS.ORDERS, data);
    },

    updateOrderStatus(orderId, newStatus) {
        const orders = this._get(this.KEYS.ORDERS);
        const index = orders.findIndex(o => o.id == orderId);
        if (index > -1) {
            orders[index].status = newStatus;
            this._save(this.KEYS.ORDERS, orders);
            return true;
        }
        return false;
    },

    updateOrderPayment(orderId, paymentStatus) {
        const orders = this._get(this.KEYS.ORDERS);
        const index = orders.findIndex(o => o.id == orderId);
        if (index > -1) {
            orders[index].paymentStatus = paymentStatus;
            this._save(this.KEYS.ORDERS, orders);
            return true;
        }
        return false;
    },

    cancelOrder(orderId) {
        const orders = this._get(this.KEYS.ORDERS);
        const index = orders.findIndex(o => o.id == orderId);
        if (index > -1) {
            const order = orders[index];
            if (order.status === 'Cancelado') return false; // Já cancelado

            // Reverter estoque
            const products = this._get(this.KEYS.PRODUCTS);
            order.items.forEach(item => {
                const pIndex = products.findIndex(p => p.id == item.productId);
                if (pIndex > -1) {
                    products[pIndex].stock += item.quantity;
                }
            });
            this._save(this.KEYS.PRODUCTS, products);

            // Atualizar status
            order.status = 'Cancelado';
            this._save(this.KEYS.ORDERS, orders);
            return true;
        }
        return false;
    }
};

// Autoinit
Store.init();
