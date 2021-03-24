// Cache version
const CACHE_VER = 'V1';

// Precache
self.addEventListener('install', function(e){
    self.skipWaiting();
    e.waitUntil(caches
    .open(CACHE_VER)
    .then(function(cache) {
        return cache.addAll([
        './',
        './css/pwa.css',
        './manifest.json',
        './js/sw-load.js',
        './js/pwa-install.js',
        './img/icon/favicon.ico',
        './img/icon/icon-192x192.png',
        './img/icon/icon-256x256.png',
        './img/icon/icon-384x384.png',
        './img/icon/icon-512x512.png',
        ]);
    }));
});

// Serve cache first
self.addEventListener('fetch', function(e) {
    e.respondWith(caches
        .open(CACHE_VER)
        .then(function(cache) {
            var req = e.request;
            return cache.match(req)
            .then(function(res) {
                var net = fetch(req)
                .then(function(nres) {
                    var res = nres.clone();
                    cache.put(req, res);
                    return nres;
                }).catch(function(){});
                return res || net;
            }).catch(function(){});
        })
    );
});

// Reset cache if version changes
self.addEventListener('activate', function(e) {
    self.skipWaiting();
    e.waitUntil(caches
    .keys(CACHE_VER)
    .then(function(keys) {
        keys.map(function(n) {
            if (n !== CACHE_VER)
            return caches.delete(n);
        });
    }));
});
