// ============================================================
//  Urban Cortex AI — Dummy Data Layer
// ============================================================

const UCData = {

    cities: [
        { id: 'MUM', name: 'Mumbai', lat: 19.076, lng: 72.877 },
        { id: 'DEL', name: 'Delhi', lat: 28.613, lng: 77.209 },
        { id: 'BLR', name: 'Bengaluru', lat: 12.971, lng: 77.594 },
        { id: 'HYD', name: 'Hyderabad', lat: 17.385, lng: 78.486 }
    ],

    bins: [
        { id: 'BIN-001', lat: 19.082, lng: 72.883, fill: 91, zone: 'Andheri East', status: 'overflow', lastUpdated: '2026-03-03T08:10:00Z', prediction: '1h' },
        { id: 'BIN-002', lat: 19.073, lng: 72.871, fill: 76, zone: 'Bandra West', status: 'high', lastUpdated: '2026-03-03T08:45:00Z', prediction: '3h' },
        { id: 'BIN-003', lat: 19.065, lng: 72.863, fill: 54, zone: 'Dadar', status: 'moderate', lastUpdated: '2026-03-03T09:00:00Z', prediction: '5h' },
        { id: 'BIN-004', lat: 19.089, lng: 72.891, fill: 88, zone: 'Kurla', status: 'high', lastUpdated: '2026-03-03T07:50:00Z', prediction: '2h' },
        { id: 'BIN-005', lat: 19.060, lng: 72.858, fill: 23, zone: 'Mahim', status: 'low', lastUpdated: '2026-03-03T09:15:00Z', prediction: '8h' },
        { id: 'BIN-006', lat: 19.094, lng: 72.868, fill: 96, zone: 'Santacruz', status: 'overflow', lastUpdated: '2026-03-03T08:00:00Z', prediction: '0.5h' },
        { id: 'BIN-007', lat: 19.078, lng: 72.900, fill: 62, zone: 'Ghatkopar', status: 'moderate', lastUpdated: '2026-03-03T08:30:00Z', prediction: '4h' },
        { id: 'BIN-008', lat: 19.055, lng: 72.876, fill: 41, zone: 'Sion', status: 'moderate', lastUpdated: '2026-03-03T09:05:00Z', prediction: '6h' },
        { id: 'BIN-009', lat: 19.101, lng: 72.855, fill: 79, zone: 'Vile Parle', status: 'high', lastUpdated: '2026-03-03T08:20:00Z', prediction: '2.5h' },
        { id: 'BIN-010', lat: 19.048, lng: 72.893, fill: 17, zone: 'Chembur', status: 'low', lastUpdated: '2026-03-03T09:20:00Z', prediction: '10h' },
        { id: 'BIN-011', lat: 19.085, lng: 72.911, fill: 83, zone: 'Vikhroli', status: 'high', lastUpdated: '2026-03-03T07:40:00Z', prediction: '2h' },
        { id: 'BIN-012', lat: 19.069, lng: 72.845, fill: 35, zone: 'Worli', status: 'low', lastUpdated: '2026-03-03T09:10:00Z', prediction: '7h' },
        { id: 'BIN-013', lat: 19.112, lng: 72.866, fill: 93, zone: 'Jogeshwari', status: 'overflow', lastUpdated: '2026-03-03T08:05:00Z', prediction: '1h' },
        { id: 'BIN-014', lat: 19.040, lng: 72.868, fill: 68, zone: 'Parel', status: 'moderate', lastUpdated: '2026-03-03T08:40:00Z', prediction: '3.5h' },
        { id: 'BIN-015', lat: 19.097, lng: 72.878, fill: 48, zone: 'Oshiwara', status: 'moderate', lastUpdated: '2026-03-03T09:00:00Z', prediction: '5.5h' },
        { id: 'BIN-016', lat: 19.074, lng: 72.921, fill: 87, zone: 'Powai', status: 'high', lastUpdated: '2026-03-03T08:15:00Z', prediction: '2h' },
        { id: 'BIN-017', lat: 19.058, lng: 72.834, fill: 12, zone: 'Matunga', status: 'low', lastUpdated: '2026-03-03T09:25:00Z', prediction: '12h' },
        { id: 'BIN-018', lat: 19.120, lng: 72.851, fill: 75, zone: 'Borivali', status: 'high', lastUpdated: '2026-03-03T08:50:00Z', prediction: '3h' },
        { id: 'BIN-019', lat: 19.031, lng: 72.855, fill: 58, zone: 'Prabhadevi', status: 'moderate', lastUpdated: '2026-03-03T09:00:00Z', prediction: '4.5h' },
        { id: 'BIN-020', lat: 19.105, lng: 72.895, fill: 94, zone: 'Malad', status: 'overflow', lastUpdated: '2026-03-03T07:55:00Z', prediction: '0.5h' }
    ],

    trucks: [
        {
            id: 'TRK-001', driver: 'Priya Sharma', license: 'MH-01-AX-2341',
            lat: 19.080, lng: 72.875, status: 'active', capacity: 65,
            route: 'RTE-001', binsCollected: 4, totalBins: 8, fuel: 72
        },
        {
            id: 'TRK-002', driver: 'Rahul Patel', license: 'MH-01-BK-8874',
            lat: 19.068, lng: 72.866, status: 'active', capacity: 42,
            route: 'RTE-002', binsCollected: 2, totalBins: 6, fuel: 58
        },
        {
            id: 'TRK-003', driver: 'Suresh Kumar', license: 'MH-01-CZ-5512',
            lat: 19.093, lng: 72.887, status: 'idle', capacity: 0,
            route: null, binsCollected: 0, totalBins: 0, fuel: 91
        },
        {
            id: 'TRK-004', driver: 'Anita Desai', license: 'MH-01-DP-1198',
            lat: 19.055, lng: 72.892, status: 'maintenance', capacity: 0,
            route: null, binsCollected: 0, totalBins: 0, fuel: 20
        },
        {
            id: 'TRK-005', driver: 'Vikram Singh', license: 'MH-01-EF-7730',
            lat: 19.116, lng: 72.862, status: 'active', capacity: 88,
            route: 'RTE-003', binsCollected: 6, totalBins: 9, fuel: 44
        }
    ],

    routes: [
        {
            id: 'RTE-001', truckId: 'TRK-001', status: 'active',
            distance: 12.4, optimizedDistance: 9.1, savings: 26.6,
            bins: ['BIN-001', 'BIN-004', 'BIN-009', 'BIN-011', 'BIN-013', 'BIN-016', 'BIN-018', 'BIN-020'],
            waypoints: [
                [19.080, 72.875], [19.082, 72.883], [19.089, 72.891],
                [19.101, 72.855], [19.085, 72.911], [19.112, 72.866],
                [19.074, 72.921], [19.120, 72.851], [19.105, 72.895]
            ],
            generatedAt: '2026-03-03T06:00:00Z', eta: '2026-03-03T14:30:00Z'
        },
        {
            id: 'RTE-002', truckId: 'TRK-002', status: 'active',
            distance: 8.7, optimizedDistance: 6.2, savings: 28.7,
            bins: ['BIN-002', 'BIN-003', 'BIN-007', 'BIN-008', 'BIN-014', 'BIN-019'],
            waypoints: [
                [19.068, 72.866], [19.073, 72.871], [19.065, 72.863],
                [19.078, 72.900], [19.055, 72.876], [19.040, 72.868], [19.031, 72.855]
            ],
            generatedAt: '2026-03-03T06:00:00Z', eta: '2026-03-03T13:00:00Z'
        },
        {
            id: 'RTE-003', truckId: 'TRK-005', status: 'active',
            distance: 15.1, optimizedDistance: 11.3, savings: 25.2,
            bins: ['BIN-005', 'BIN-006', 'BIN-010', 'BIN-012', 'BIN-015', 'BIN-017', 'BIN-006', 'BIN-013', 'BIN-020'],
            waypoints: [
                [19.116, 72.862], [19.094, 72.868], [19.060, 72.858],
                [19.097, 72.878], [19.069, 72.845], [19.048, 72.893], [19.112, 72.866], [19.105, 72.895]
            ],
            generatedAt: '2026-03-03T06:00:00Z', eta: '2026-03-03T15:00:00Z'
        }
    ],

    complaints: [
        { id: 'CMP-001', citizen: 'Sneha Joshi', zone: 'Andheri East', type: 'Overflow', status: 'resolved', priority: 'high', date: '2026-03-01T09:30:00Z', desc: 'Bin overflowing near station gate, causing odour.' },
        { id: 'CMP-002', citizen: 'Ravi Gupta', zone: 'Bandra West', type: 'Missed Pickup', status: 'investigating', priority: 'medium', date: '2026-03-02T11:00:00Z', desc: 'Sunday pickup was missed. No truck came.' },
        { id: 'CMP-003', citizen: 'Pooja Nair', zone: 'Dadar', type: 'Damaged Bin', status: 'open', priority: 'low', date: '2026-03-03T07:15:00Z', desc: 'Bin lid is broken and waste spills out.' },
        { id: 'CMP-004', citizen: 'Arjun Tiwari', zone: 'Kurla', type: 'Overflow', status: 'open', priority: 'high', date: '2026-03-03T08:00:00Z', desc: 'Two bins overflowing near market area.' },
        { id: 'CMP-005', citizen: 'Meera Pillai', zone: 'Santacruz', type: 'Overflow', status: 'investigating', priority: 'high', date: '2026-03-03T08:30:00Z', desc: 'Overflow affecting foot traffic on main road.' },
        { id: 'CMP-006', citizen: 'Sourav Das', zone: 'Ghatkopar', type: 'Missed Pickup', status: 'resolved', priority: 'medium', date: '2026-02-28T14:00:00Z', desc: 'Pickup skipped for 2 days in a row.' },
        { id: 'CMP-007', citizen: 'Kavya Reddy', zone: 'Vile Parle', type: 'Damaged Bin', status: 'open', priority: 'low', date: '2026-03-03T06:45:00Z', desc: 'Bin missing wheels, cannot be moved to curb.' },
        { id: 'CMP-008', citizen: 'Nikhil Jain', zone: 'Malad', type: 'Overflow', status: 'open', priority: 'high', date: '2026-03-03T09:00:00Z', desc: 'Bin near school is overflowing. Urgent.' }
    ],

    metrics: {
        totalBins: 20,
        urgentBins: 4,
        activeTrucks: 3,
        efficiency: 87.4,
        tripsAvoided: 14,
        avgResponse: 18,
        co2Saved: 124.6,
        routesOptimized: 3,
        complianceRate: 94.2,
        overflowAlerts: 4,
        weeklyFill: [
            { day: 'Mon', low: 5, moderate: 7, high: 4, overflow: 2 },
            { day: 'Tue', low: 4, moderate: 6, high: 5, overflow: 3 },
            { day: 'Wed', low: 6, moderate: 5, high: 4, overflow: 1 },
            { day: 'Thu', low: 3, moderate: 8, high: 6, overflow: 2 },
            { day: 'Fri', low: 5, moderate: 9, high: 3, overflow: 1 },
            { day: 'Sat', low: 4, moderate: 7, high: 5, overflow: 3 },
            { day: 'Sun', low: 6, moderate: 6, high: 4, overflow: 4 }
        ],
        complaintTrend: [
            { day: 'Mon', count: 3 }, { day: 'Tue', count: 5 }, { day: 'Wed', count: 2 },
            { day: 'Thu', count: 7 }, { day: 'Fri', count: 4 }, { day: 'Sat', count: 6 },
            { day: 'Sun', count: 8 }
        ],
        routeDistances: [
            { route: 'RTE-001', baseline: 12.4, optimized: 9.1 },
            { route: 'RTE-002', baseline: 8.7, optimized: 6.2 },
            { route: 'RTE-003', baseline: 15.1, optimized: 11.3 }
        ],
        fleetUtilization: [
            { label: 'Active', value: 3, color: '#3B82F6' },
            { label: 'Idle', value: 1, color: '#94A3B8' },
            { label: 'Maintenance', value: 1, color: '#F59E0B' }
        ]
    },

    activityFeed: [
        { type: 'overflow', icon: '🗑️', msg: 'BIN-020 (Malad) reached overflow threshold', time: '2 min ago', color: 'danger' },
        { type: 'route', icon: '🚛', msg: 'TRK-001 completed stop at BIN-001 (Andheri)', time: '4 min ago', color: 'success' },
        { type: 'complaint', icon: '📢', msg: 'New complaint from Nikhil Jain (Malad)', time: '9 min ago', color: 'warning' },
        { type: 'route', icon: '🗺️', msg: 'Route RTE-003 auto-recalculated by AI', time: '14 min ago', color: 'accent' },
        { type: 'overflow', icon: '🗑️', msg: 'BIN-013 (Jogeshwari) overflowing', time: '18 min ago', color: 'danger' },
        { type: 'truck', icon: '🔧', msg: 'TRK-004 sent to maintenance bay', time: '31 min ago', color: 'warning' },
        { type: 'complaint', icon: '✅', msg: 'Complaint CMP-001 marked resolved', time: '45 min ago', color: 'success' },
        { type: 'route', icon: '🚀', msg: 'Morning route dispatch completed (3 trucks)', 'time': '1h ago', color: 'accent' }
    ],

    investigations: [
        { id: 'INV-001', title: 'Recurring Overflow — Andheri East Cluster', priority: 'critical', status: 'open', binCount: 3, openedAt: '2026-03-01T08:00:00Z', notes: 'Bins in this zone overflow daily by 8am. Possible demand mismatch.' },
        { id: 'INV-002', title: 'Route RTE-002 Delay Pattern', priority: 'high', status: 'reviewing', binCount: 6, openedAt: '2026-03-02T10:00:00Z', notes: 'Route consistently 40min late due to traffic on Turner Road.' },
        { id: 'INV-003', title: 'TRK-004 Maintenance Escalation', priority: 'medium', status: 'assigned', binCount: 0, openedAt: '2026-03-03T07:00:00Z', notes: 'Truck flagged for fuel system issue during morning check.' },
        { id: 'INV-004', title: 'Complaint Spike — Malad Zone', priority: 'high', status: 'open', binCount: 2, openedAt: '2026-03-03T09:00:00Z', notes: '3 overflow complaints from Malad in 24h. BIN-020 and neighbors.' }
    ]
};

// Helper functions
UCData.getBinStatus = function (fill) {
    if (fill >= 90) return 'overflow';
    if (fill >= 70) return 'high';
    if (fill >= 40) return 'moderate';
    return 'low';
};

UCData.getBinColor = function (status) {
    const map = { overflow: '#EF4444', high: '#F59E0B', moderate: '#3B82F6', low: '#22C55E' };
    return map[status] || '#94A3B8';
};

UCData.getStatusBadge = function (status) {
    const map = {
        overflow: 'badge-danger',
        high: 'badge-warning',
        moderate: 'badge-accent',
        low: 'badge-success',
        active: 'badge-success',
        idle: 'badge-muted',
        maintenance: 'badge-warning',
        open: 'badge-danger',
        investigating: 'badge-warning',
        resolved: 'badge-success',
        reviewing: 'badge-accent',
        assigned: 'badge-purple',
        critical: 'badge-danger',
        medium: 'badge-accent'
    };
    return map[status] || 'badge-muted';
};

UCData.formatTime = function (isoStr) {
    if (!isoStr) return '—';
    const d = new Date(isoStr);
    return d.toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
};

window.UCData = UCData;
