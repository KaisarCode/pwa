const cache_name = 'v1';
const cache_assets = [
    '.',
    'js/app.js',
    'css/app.css'
];

// Install
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches
        .open(cache_name).then(cache => {
            // Add cache
            cache.addAll(cache_assets);
        }).then(() => self.skipWaiting())
    );
});

// Activate
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(cache_names => {
            cache_names.map(cache => {
                if (cache !== cache_name) {
                    // Update cache
                    caches.delete(cache);
                }
            });
        })
    );
});

// Fetch content
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
        .catch(() => { caches.match(e.request) })
    );
});
