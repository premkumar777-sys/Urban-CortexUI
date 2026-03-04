// ============================================================
//  Urban Cortex AI — Shared UI Components (Sidebar + Topbar)
// ============================================================

const UCComponents = {

    // Theme management
    initTheme() {
        const saved = localStorage.getItem('uc_theme') || 'light';
        document.documentElement.setAttribute('data-theme', saved);
        return saved;
    },

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('uc_theme', next);
        // Update toggle button icon
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.innerHTML = next === 'dark'
            ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
            : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        return next;
    },

    // Sidebar HTML generator
    renderSidebar(activeItem = 'overview') {
        const user = UCAuth.getUser();
        const root = this._root();

        const navItems = [
            { id: 'overview', label: 'Overview', icon: this._icon('grid'), href: root + 'admin/index.html' },
            { id: 'fleet', label: 'Fleet', icon: this._icon('truck'), href: root + 'admin/fleet.html', badge: null },
            { id: 'complaints', label: 'Complaints', icon: this._icon('alert'), href: root + 'admin/complaints.html', badge: UCData.complaints.filter(c => c.status === 'open').length },
            { id: 'investigations', label: 'Investigations', icon: this._icon('search'), href: root + 'admin/investigations.html' },
            { id: 'analytics', label: 'Analytics', icon: this._icon('bar-chart'), href: root + 'admin/analytics.html' },
            { id: 'settings', label: 'Settings', icon: this._icon('settings'), href: root + 'admin/settings.html' }
        ];

        return `
      <div class="sidebar-logo">
        <div class="sidebar-logo-icon">🏙️</div>
        <div>
          <div class="sidebar-logo-text">Urban Cortex</div>
          <div class="sidebar-logo-sub">AI Command Center</div>
        </div>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-section-title">Navigation</div>
        ${navItems.map(item => `
          <a href="${item.href}" class="nav-item ${activeItem === item.id ? 'active' : ''}">
            <span class="nav-icon">${item.icon}</span>
            <span>${item.label}</span>
            ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
          </a>
        `).join('')}
      </div>
      <div class="sidebar-bottom">
        <div style="display:flex;align-items:center;gap:10px;padding:10px;border-radius:10px;background:var(--bg-primary);">
          <div class="avatar" style="width:32px;height:32px;font-size:12px;">${user?.avatar || '??'}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:600;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${user?.name || 'Admin'}</div>
            <div style="font-size:11px;color:var(--text-muted);">Admin</div>
          </div>
          <button onclick="UCAuth.logout()" class="icon-btn btn-xs" data-tip="Logout" style="border:none;background:transparent;cursor:pointer;color:var(--text-muted);">
            ${this._icon('logout')}
          </button>
        </div>
      </div>
    `;
    },

    // Topbar HTML
    renderTopbar(title = 'Dashboard', subtitle = '') {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        const moonIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        const sunIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
        const user = UCAuth.getUser();

        return `
      <button class="icon-btn menu-toggle" onclick="UCComponents.toggleSidebar()" style="border:none;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <div>
        <div class="topbar-title">${title}</div>
        ${subtitle ? `<div style="font-size:12px;color:var(--text-muted);">${subtitle}</div>` : ''}
      </div>
      <div class="topbar-spacer"></div>
      <div style="display:flex;align-items:center;gap:6px;">
        <div class="status-online hide-mobile">
          <span class="status-pulse"></span> Live
        </div>
        <div class="refresh-ring" id="refresh-ring" data-tip="Auto-refreshing"></div>
      </div>
      <select class="select hide-mobile" id="city-selector" onchange="UCComponents.onCityChange(this.value)" style="width:auto;padding:7px 12px;font-size:13px;">
        ${UCData.cities.map(c => `<option value="${c.id}" ${c.id === 'MUM' ? 'selected' : ''}>${c.name}</option>`).join('')}
      </select>
      <button id="theme-toggle" class="icon-btn" onclick="UCComponents.toggleTheme()" data-tip="Toggle theme">
        ${theme === 'dark' ? sunIcon : moonIcon}
      </button>
      <div class="dropdown" id="profile-dropdown">
        <div class="avatar" onclick="UCComponents.toggleDropdown('profile-dropdown')">${user?.avatar || '??'}</div>
        <div class="dropdown-menu" id="profile-dropdown-menu">
          <div style="padding:10px 14px;border-bottom:1px solid var(--border);">
            <div style="font-size:13px;font-weight:700;">${user?.name || 'Admin'}</div>
            <div style="font-size:12px;color:var(--text-muted);">${user?.email || ''}</div>
          </div>
          <div class="dropdown-item">
            ${this._icon('user')} My Profile
          </div>
          <div class="dropdown-item">
            ${this._icon('settings')} Settings
          </div>
          <div class="dropdown-divider"></div>
          <div class="dropdown-item danger" onclick="UCAuth.logout()">
            ${this._icon('logout')} Logout
          </div>
        </div>
      </div>
    `;
    },

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        if (sidebar) sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('open');
    },

    toggleDropdown(id) {
        const menu = document.getElementById(id + '-menu');
        if (menu) {
            const isOpen = menu.classList.contains('open');
            document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
            if (!isOpen) menu.classList.add('open');
        }
    },

    onCityChange(cityId) {
        const city = UCData.cities.find(c => c.id === cityId);
        if (city && window.UCMap && UCMap.map) {
            UCMap.map.setView([city.lat, city.lng], 13);
        }
    },

    // Count-up animation
    animateCount(el, target, suffix = '', duration = 1200) {
        const start = 0;
        const startTime = performance.now();
        const isFloat = String(target).includes('.');
        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            const val = start + (target - start) * ease;
            el.textContent = (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    },

    // Skeleton to real content transition
    reveal(el) {
        el.classList.remove('skeleton');
        el.style.animation = 'fadeIn 0.3s ease';
    },

    _root() {
        const path = window.location.pathname;
        if (path.includes('/admin/') || path.includes('/driver/') || path.includes('/citizen/')) return '../';
        return './';
    },

    _icon(name) {
        const icons = {
            grid: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
            truck: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
            alert: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
            search: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
            'bar-chart': `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
            settings: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
            logout: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
            user: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
            plus: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
            download: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
            map: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
            refresh: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
            eye: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
            edit: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
            trash: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
            'check-circle': `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
            'x-circle': `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
            navigation: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
        };
        return icons[name] || '';
    }
};

// Close dropdowns on outside click
document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
    }
});

window.UCComponents = UCComponents;
