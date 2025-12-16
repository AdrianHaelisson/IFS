/**
 * Helper de Autenticação
 * Verifica permissões e redireciona
 */
const Auth = {
    check(allowedRoles = []) {
        const user = Store.getCurrentUser();

        if (!user) {
            window.location.href = 'login.html';
            return null;
        }

        if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
            alert('Acesso negado. Você não tem permissão para acessar esta página.');
            // Redireciona para home apropriada
            if (user.role === 'ADMIN') window.location.href = 'admin.html';
            else if (user.role === 'EXHIBITOR') window.location.href = 'dashboard_expositor.html'; // Vamos criar essa
            else window.location.href = 'index.html';
            return null;
        }

        // Atualiza UI com info do usuário se houver elemento
        const userInfoEl = document.getElementById('user-info');
        if (userInfoEl) {
            userInfoEl.innerHTML = `
                <span>Olá, <strong>${user.name}</strong> (${this.translateRole(user.role)})</span>
                <button onclick="Auth.logout()" class="secondary" style="margin-left: 1rem; padding: 0.25rem 0.5rem; font-size: 0.8rem;">Sair</button>
            `;
        }

        return user;
    },

    logout() {
        Store.logout();
        window.location.href = 'login.html';
    },

    translateRole(role) {
        const roles = {
            'ADMIN': 'Administrador',
            'EXHIBITOR': 'Expositor',
            'CONSUMER': 'Consumidor'
        };
        return roles[role] || role;
    }
};
