(function() {
    console.log("Script 26 loaded");
    const content = document.getElementById('content');
    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Module 26 initialized successfully.';
        p.style.color = '#007BFF';
        content.appendChild(p);
    }
})();