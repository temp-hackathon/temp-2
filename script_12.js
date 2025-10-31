(function() {
    console.log("Script 12 loaded");
    const content = document.getElementById('content');
    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Module 12 initialized successfully.';
        p.style.color = '#007BFF';
        content.appendChild(p);
    }
})();