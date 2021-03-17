const cache_name = 'files';

// Cache 1
let files = [
    './',
    './css/pwa.css',
    './manifest.json',
    './js/sw-load.js',
    './js/pwa-install.js',
    './img/icon/favicon.ico',
    './img/icon/icon-192x192.png',
];
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cache_name).then(cache => {
            return cache.addAll(files);
        })
    );
});

// Cache 2
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(res => {
            // Save cache
            const res_clone = res.clone();
            caches.open(cache_name).then(cache => {
                var url = e.request.url;
                cache.put(url, res_clone);
            }); return res;
        }).catch(err => caches.match(e.request).then(res => res))
    );
});
