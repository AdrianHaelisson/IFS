// Theme Management
const Theme = {
    toggleBtnId: 'theme-toggle-btn',
    storageKey: 'ifs_theme_preference',

    init() {
        this.applySavedTheme();
        this.injectToggleButton();
    },

    applySavedTheme() {
        const savedTheme = localStorage.getItem(this.storageKey);
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    },

    toggle() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem(this.storageKey, 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem(this.storageKey, 'dark');
        }
        this.updateButtonIcon();
    },

    injectToggleButton() {
        // Prevent duplicate
        if (document.getElementById(this.toggleBtnId)) return;

        const btn = document.createElement('button');
        btn.id = this.toggleBtnId;
        btn.onclick = () => this.toggle();
        btn.setAttribute('aria-label', 'Alternar Tema');
        
        // Style it to float bottom-right or top-right. Let's go with fixed bottom-right for visibility
        Object.assign(btn.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '9999',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            transition: 'transform 0.2s, background-color 0.2s'
        });

        btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
        btn.onmouseout = () => btn.style.transform = 'scale(1)';

        document.body.appendChild(btn);
        this.updateButtonIcon();
    },

    updateButtonIcon() {
        const btn = document.getElementById(this.toggleBtnId);
        if (!btn) return;
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        // Simple text emojis for now, can be replaced with SVG if needed
        btn.textContent = isDark ? '☀️' : '🌙'; 
    }
};

// Run on load
document.addEventListener('DOMContentLoaded', () => Theme.init());
