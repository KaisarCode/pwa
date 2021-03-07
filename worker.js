const cache_name = 'v1';

// Install
self.addEventListener('install', e => {
});

// Activate
self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cache_names => {
            return Promise.all(
                cache_names.map(cache => {
                    if (cache !== cache_name) {
                        // Clear old cache
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request).then(res => {
            // Save cache
            const res_clone = res.clone();
            caches.open(cache_name).then(cache => {
                cache.put(e.request, res_clone);
            });
            return res;
        }).catch(err => caches.match(e.request).then(res => res))
    );
});
