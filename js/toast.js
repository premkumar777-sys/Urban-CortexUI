// ============================================================
//  Urban Cortex AI — Toast Notification System
// ============================================================

(function () {
    // Inject container
    function ensureContainer() {
        let c = document.getElementById('toast-container');
        if (!c) {
            c = document.createElement('div');
            c.id = 'toast-container';
            document.body.appendChild(c);
        }
        return c;
    }

    const ICONS = {
        success: '✅',
        warning: '⚠️',
        error: '❌',
        info: 'ℹ️'
    };

    window.toast = {
        show(title, message = '', type = 'info', duration = 4000) {
            const container = ensureContainer();
            const id = 'toast-' + Date.now();
            const el = document.createElement('div');
            el.id = id;
            el.className = `toast toast-${type} toast-in`;
            el.innerHTML = `
        <span class="toast-icon">${ICONS[type] || 'ℹ️'}</span>
        <div class="toast-body">
          <div class="toast-title">${title}</div>
          ${message ? `<div class="toast-msg">${message}</div>` : ''}
        </div>
        <span class="toast-close" onclick="toast.dismiss('${id}')">✕</span>
      `;
            container.appendChild(el);

            if (duration > 0) {
                setTimeout(() => this.dismiss(id), duration);
            }
            return id;
        },

        dismiss(id) {
            const el = document.getElementById(id);
            if (!el) return;
            el.style.animation = 'toastOut 0.32s ease forwards';
            el.addEventListener('animationend', () => el.remove(), { once: true });
        },

        success(title, msg, duration) { return this.show(title, msg, 'success', duration); },
        warning(title, msg, duration) { return this.show(title, msg, 'warning', duration); },
        error(title, msg, duration) { return this.show(title, msg, 'error', duration); },
        info(title, msg, duration) { return this.show(title, msg, 'info', duration); }
    };
})();
