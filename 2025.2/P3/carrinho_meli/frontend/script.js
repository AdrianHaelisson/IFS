    const CATALOGO_FALLBACK = [
        { id: '1', titulo: 'Fone Bluetooth Over‑Ear', preco: 299.90, img: 'https://via.placeholder.com/120x120.png?text=P01' },
        { id: '2', titulo: 'Teclado Mecânico ABNT2 RGB', preco: 199.00, img: 'https://via.placeholder.com/120x120.png?text=P02' },
        { id: '3', titulo: 'Mouse Sem Fio 2.4G', preco: 59.90, img: 'https://via.placeholder.com/120x120.png?text=P03' },
        { id: '4', titulo: 'Monitor 24\" IPS 75Hz', preco: 899.00, img: 'https://via.placeholder.com/120x120.png?text=P04' },
        { id: '5', titulo: 'SSD NVMe 1TB', preco: 449.90, img: 'https://via.placeholder.com/120x120.png?text=P05' },
        { id: '6', titulo: 'HD Externo 2TB', preco: 379.90, img: 'https://via.placeholder.com/120x120.png?text=P06' },
        { id: '7', titulo: 'Smartwatch Esportivo', preco: 229.90, img: 'https://via.placeholder.com/120x120.png?text=P07' },
        { id: '8', titulo: 'Webcam Full HD', preco: 139.90, img: 'https://via.placeholder.com/120x120.png?text=P08' },
        { id: '9', titulo: 'Microfone USB Condensador', preco: 199.90, img: 'https://via.placeholder.com/120x120.png?text=P09' },
        { id: '10', titulo: 'Ring Light 12\"', preco: 119.90, img: 'https://via.placeholder.com/120x120.png?text=P10' },
        { id: '11', titulo: 'Cabo HDMI 2.1 2m', preco: 49.90, img: 'https://via.placeholder.com/120x120.png?text=P11' },
        { id: '12', titulo: 'Hub USB 3.0 4 Portas', preco: 89.90, img: 'https://via.placeholder.com/120x120.png?text=P12' },
        { id: '13', titulo: 'Carregador GaN 65W', preco: 159.90, img: 'https://via.placeholder.com/120x120.png?text=P13' },
        { id: '14', titulo: 'Power Bank 20.000mAh', preco: 179.90, img: 'https://via.placeholder.com/120x120.png?text=P14' },
        { id: '15', titulo: 'Headset Gamer 7.1', preco: 249.90, img: 'https://via.placeholder.com/120x120.png?text=P15' },
        { id: '16', titulo: 'Placa de Vídeo 8GB', preco: 1499.90, img: 'https://via.placeholder.com/120x120.png?text=P16' },
        { id: '17', titulo: 'Teclado Sem Fio Compacto', preco: 129.90, img: 'https://via.placeholder.com/120x120.png?text=P17' },
        { id: '18', titulo: 'Mousepad XXL', preco: 69.90, img: 'https://via.placeholder.com/120x120.png?text=P18' },
        { id: '19', titulo: 'Caixa de Som Bluetooth', preco: 199.90, img: 'https://via.placeholder.com/120x120.png?text=P19' },
        { id: '20', titulo: 'Leitor de Cartões USB-C', preco: 79.90, img: 'https://via.placeholder.com/120x120.png?text=P20' }
    ];
    
    const API_BASE = 'http://localhost:3000/api/carrinho';

    const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
    const state = { itens: [] };

    async function carregarCarrinho() {
      try {
        const { data } = await axios.get(API_BASE);
        state.itens = Array.isArray(data) ? data : [];
      } catch (err) {
        console.warn('Falha ao buscar API, usando dados de exemplo:', err?.message);
        state.itens = [
          { id: '1', titulo: 'Item do HTML', preco: 0, img: '', qty: 1 },
          { id: '2', titulo: 'Item do HTML', preco: 0, img: '', qty: 1 },
          { id: '3', titulo: 'Item do HTML', preco: 0, img: '', qty: 1 },
        ];
      }
      renderizarCarrinho();
      atualizarResumo();
    }

    // Renderiza itens no DOM
    function renderizarCarrinho() {
      const cart = document.getElementById('cart');
      const itensHtml = state.itens.map(item => `
        <article class="cart-item" role="region" aria-label="Item ${item.id}" data-id="${item.id}">
          <div class="cart-item__thumb">
            <img src="${item.img}" alt="Foto do produto" />
          </div>
          <div class="cart-item__info">
            <h2 class="cart-item__title">${item.titulo}</h2>
            <div class="cart-item__actions">
              <label class="qty" for="qty-1">Qtd.
                <input id="qty-1" name="qty-1" list="qty-options-1" data-role="qty" type="number" value="${item.qty}" aria-label="Quantidade do produto ${item.titulo}" />
              </label>
              <button class="link" type="button" data-role="remove">Remover</button>
            </div>
          </div>
          <div class="cart-item__price">
            <div class="price">${moeda.format(item.preco)}</div>
          </div>
        </article>
      `).join('');
      cart.innerHTML = itensHtml;
      vincularEventos();
    }

    // Vincula eventos de change no input number e clique em Remover
    function vincularEventos() {
      // Alterar quantidade
      document.querySelectorAll('[data-role="qty"]').forEach(input => {
        input.addEventListener('change', async (e) => {
          const el = e.currentTarget;
          const article = el.closest('.cart-item');
          const id = article?.dataset?.id;
          let qty = parseInt(el.value, 10);

          // Chama a API para persistir a mudança (PUT /api/carrinho/:id)
          try {
            await axios.put(`${API_BASE}/${id}`, { qty });
            carregarCarrinho(); 
          } catch (err) {
            console.warn('Falha ao atualizar quantidade na API:', err?.message);
          }
        });
      });

      // Remover item
      document.querySelectorAll('[data-role="remove"]').forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const article = e.currentTarget.closest('.cart-item');
          const id = article?.dataset?.id;

          // Chama API para remover (DELETE /api/carrinho/:id)
          try {
            await axios.delete(`${API_BASE}/${id}`);
            carregarCarrinho(); 
          } catch (err) {
            console.warn('Falha ao remover item na API:', err?.message);
          }
        });
      });
    }

    // Recalcula e exibe o resumo (qtd de itens e total)
    function atualizarResumo() {
        let qtdItens = 0;
        let total = 0;
        for (let i = 0; i < state.itens.length; i++) {
            const it = state.itens[i];
            qtdItens += Number(it.qty) || 0;
            total += (Number(it.qty) || 0) * (Number(it.preco) || 0);
        }
        document.getElementById('qtd-itens').textContent = String(qtdItens);
        document.getElementById('total').textContent = moeda.format(total);
    }

    function pegarItemAleatorio() {
      const index = Math.floor(Math.random() * CATALOGO_FALLBACK.length);
      return CATALOGO_FALLBACK[index];
    }


    document.getElementById("btn-add-random").onclick = async function adicionarItemAleatorio() {
        const item = pegarItemAleatorio();
        const payload = { ...item, qty: 1 };
        await axios.post(API_BASE, payload);
        
        carregarCarrinho();
    };

    // Inicialização
    carregarCarrinho();