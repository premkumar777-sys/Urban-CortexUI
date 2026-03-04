// ============================================================
//  Urban Cortex AI — Mock Authentication (localStorage-based)
// ============================================================

const AUTH_KEY = 'uc_auth';

const MOCK_USERS = {
  admin: {
    id: 'usr_admin_01',
    name: 'Rohan Mehta',
    email: 'admin@urbancortex.ai',
    role: 'admin',
    avatar: 'RM',
    city: 'Mumbai',
    token: 'mock-jwt-admin-xK9f2Lp8'
  },
  driver: {
    id: 'usr_driver_01',
    name: 'Priya Sharma',
    email: 'driver@urbancortex.ai',
    role: 'driver',
    avatar: 'PS',
    truckId: 'TRK-001',
    city: 'Mumbai',
    token: 'mock-jwt-driver-mN4aZ7qR'
  },
  citizen: {
    id: 'usr_citizen_01',
    name: 'Aditya Verma',
    email: 'citizen@urbancortex.ai',
    role: 'citizen',
    avatar: 'AV',
    city: 'Mumbai',
    token: 'mock-jwt-citizen-hT2wE5jX'
  }
};

const UCAuth = {
  login(email, password, role) {
    // Mock validation
    if (!email || !password || !role) {
      return { success: false, error: 'All fields are required.' };
    }
    if (password.length < 4) {
      return { success: false, error: 'Invalid credentials.' };
    }
    const user = MOCK_USERS[role];
    if (!user) {
      return { success: false, error: 'Invalid role selected.' };
    }
    // Store user in localStorage
    const session = { ...user, loginAt: new Date().toISOString() };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { success: true, user: session };
  },

  logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = UCAuth._rootPath() + 'index.html';
  },

  getUser() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  getRole() {
    const user = this.getUser();
    return user ? user.role : null;
  },

  requireAuth(allowedRoles = []) {
    const user = this.getUser();
    if (!user) {
      window.location.href = UCAuth._rootPath() + 'index.html';
      return null;
    }
    if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
      // Redirect to their own dashboard
      this._redirectByRole(user.role);
      return null;
    }
    return user;
  },

  redirectIfLoggedIn() {
    const user = this.getUser();
    if (user) this._redirectByRole(user.role);
  },

  _redirectByRole(role) {
    const root = UCAuth._rootPath();
    const map = {
      admin: root + 'admin/index.html',
      driver: root + 'driver/index.html',
      citizen: root + 'citizen/index.html'
    };
    window.location.href = map[role] || root + 'index.html';
  },

  _rootPath() {
    // Determine root path relative to current page
    const path = window.location.pathname;
    if (path.includes('/admin/') || path.includes('/driver/') || path.includes('/citizen/')) {
      return '../';
    }
    return './';
  }
};

// Make globally available
window.UCAuth = UCAuth;
