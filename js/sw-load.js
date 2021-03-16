// Redirect to HTTPS
if(location.hostname!=='localhost' 
&& location.protocol == 'http:')
location.href = location.href
.replace(/^http:/, 'https:');

// Load Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
        .register('sw.js');
    });
}
