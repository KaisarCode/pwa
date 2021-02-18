(function(){
    var evt = null;
    
    // Register service worker
    if ('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js')
    }
    
    // Check if pwa is installed
    window.addEventListener('appinstalled', function() {
        //installedPWA();
    });
    
    // Custom install pwa
    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        var evt = e;
    });
    
    document.querySelectorAll('.pwa-install').forEach(function(btn){
        btn.addEventListener('click', function() {
            if (!evt) return;
            evt.prompt();
            evt = null;
        });
    });
    
})();
