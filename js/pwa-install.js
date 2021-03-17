// Install
(function(){
    var btn = document.getElementById('install');
    
    // Defer prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        window.deferredPrompt = e;
        btn.classList.toggle('show', true);
    });
    
    // Call prompt
    btn.addEventListener('click', async () => {
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) return;
        promptEvent.prompt();
        const result = await promptEvent.userChoice;
        window.deferredPrompt = null;
        btn.classList.toggle('show', false);
    });
    
    // Clear prompt
    window.addEventListener('appinstalled', (e) => {
        window.deferredPrompt = null;
    });
})();
