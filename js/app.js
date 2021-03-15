// Load Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker
        .register('worker.js', { scope:'.' });
    });
}

// Install
(function(){
    var btn = document.getElementById('install');
    
    // Defer prompt
    window.addEventListener('beforeinstallprompt', (event) => {
        window.deferredPrompt = event;
        btn.classList.toggle('hidden', false);
    });
    
    // Call prompt
    btn.addEventListener('click', async () => {
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) return;
        promptEvent.prompt();
        const result = await promptEvent.userChoice;
        window.deferredPrompt = null;
        btn.classList.toggle('hidden', true);
    });
    
    // Clear prompt
    window.addEventListener('appinstalled', (event) => {
        window.deferredPrompt = null;
    });
})();
