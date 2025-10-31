(function() {
    console.log("Script 4 loaded");
    const content = document.getElementById('content');
    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Module 4 initialized successfully.';
        p.style.color = '#007BFF';
        content.appendChild(p);
    }
})();