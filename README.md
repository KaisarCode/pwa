# PWA
Progressive Web Application template.

## Icons
You can generate the app's icons with the bash script located at **/img/icon**
The sources are in **/img/icon/src**. This generator requires Imagemagick.

## Cache
This template is ready for offline serving. By default, it caches up all
the files loaded. To cache just cetrain files, you must filter the requests
in worker.js.

## Strategies
Here are some example strategies to serve content from cache.

**Cache only**
```
// Serve cache only
self.addEventListener('fetch', function(e) {
    e.respondWith(caches
        .open(CACHE_VER)
        .then(function(cache) {
            var req = e.request;
            return cache.match(req)
            .then(function(res) {
                return res || fetch(req)
                .then(function(nres) {
                    var res = nres.clone();
                    cache.put(req, res);
                    return nres;
                }).catch(function(){});
            }).catch(function(){});
        })
    );
});
```

**Cache first**
```
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
```

**Network first**
```
// Serve network first
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
                return net || res;
            }).catch(function(){});
        })
    );
});
```


