(function() {
    console.log("Script 15 loaded");
    const content = document.getElementById('content');
    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Module 15 initialized successfully.';
        p.style.color = '#007BFF';
        content.appendChild(p);
    }
})();