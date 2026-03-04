// ============================================================
//  Urban Cortex AI — Real-time Simulation Engine
// ============================================================

const UCSimulation = {
    _listeners: {},
    _running: false,
    _interval: null,
    _tick: 0,

    // Register event listener
    on(event, fn) {
        if (!this._listeners[event]) this._listeners[event] = [];
        this._listeners[event].push(fn);
    },

    _emit(event, data) {
        (this._listeners[event] || []).forEach(fn => fn(data));
    },

    start() {
        if (this._running) return;
        this._running = true;
        this._interval = setInterval(() => this._tick_(), 2500);
        this._emit('started', {});
    },

    stop() {
        this._running = false;
        clearInterval(this._interval);
        this._emit('stopped', {});
    },

    toggle() {
        if (this._running) this.stop(); else this.start();
    },

    _tick_() {
        this._tick++;
        const t = this._tick;

        // 1. Move trucks randomly
        UCData.trucks.forEach(truck => {
            if (truck.status !== 'active') return;
            truck.lat += (Math.random() - 0.5) * 0.003;
            truck.lng += (Math.random() - 0.5) * 0.003;
            this._emit('truckMoved', { truck: { ...truck } });
        });

        // 2. Update bin fill levels
        const bins = UCData.bins;
        const randomBin = bins[Math.floor(Math.random() * bins.length)];
        const delta = Math.floor(Math.random() * 6) - 1; // -1 to +4
        randomBin.fill = Math.max(0, Math.min(100, randomBin.fill + delta));
        const prevStatus = randomBin.status;
        randomBin.status = UCData.getBinStatus(randomBin.fill);
        randomBin.lastUpdated = new Date().toISOString();
        this._emit('binUpdated', { bin: { ...randomBin }, prevStatus });

        // 3. Overflow alert
        if (randomBin.fill >= 90 && prevStatus !== 'overflow') {
            this._emit('overflowAlert', { bin: { ...randomBin } });
        }

        // 4. Recalculate KPI metrics
        const overflowCount = bins.filter(b => b.status === 'overflow').length;
        const highCount = bins.filter(b => b.status === 'high').length;
        UCData.metrics.urgentBins = overflowCount + highCount;
        UCData.metrics.efficiency = parseFloat((85 + Math.random() * 5).toFixed(1));
        UCData.metrics.avgResponse = Math.round(15 + Math.random() * 8);
        this._emit('metricsUpdated', { metrics: { ...UCData.metrics } });

        // 5. Activity feed update (every 5 ticks)
        if (t % 5 === 0) {
            const events = [
                { type: 'route', icon: '🚛', msg: `TRK-00${Math.ceil(Math.random() * 3)} collected bin at zone`, color: 'success' },
                { type: 'overflow', icon: '🗑️', msg: `BIN-0${String(Math.floor(Math.random() * 20) + 1).padStart(2, '0')} fill level updated`, color: 'warning' },
                { type: 'ai', icon: '🤖', msg: `AI re-optimized route RTE-00${Math.ceil(Math.random() * 3)}`, color: 'accent' }
            ];
            const ev = events[Math.floor(Math.random() * events.length)];
            ev.time = 'just now';
            UCData.activityFeed.unshift(ev);
            if (UCData.activityFeed.length > 20) UCData.activityFeed.pop();
            this._emit('activityUpdated', { activity: UCData.activityFeed[0] });
        }

        // 6. Truck bin collection progress (every 8 ticks)
        if (t % 8 === 0) {
            const activeTrucks = UCData.trucks.filter(tk => tk.status === 'active');
            if (activeTrucks.length > 0) {
                const truck = activeTrucks[Math.floor(Math.random() * activeTrucks.length)];
                if (truck.binsCollected < truck.totalBins) {
                    truck.binsCollected++;
                    truck.capacity = Math.min(100, truck.capacity + Math.floor(Math.random() * 8 + 4));
                    this._emit('routeProgress', { truck: { ...truck } });
                }
            }
        }
    }
};

// Fallback polling (10s) if simulation not started
UCSimulation.startPolling = function (callback) {
    return setInterval(callback, 10000);
};

window.UCSimulation = UCSimulation;
