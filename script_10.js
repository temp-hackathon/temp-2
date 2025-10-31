(function() {
    console.log("Script 10 loaded");
    const content = document.getElementById('content');
    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Module 10 initialized successfully.';
        p.style.color = '#007BFF';
        content.appendChild(p);
    }
})();