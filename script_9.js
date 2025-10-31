(function() {
    console.log("Script 9 loaded");
    const content = document.getElementById('content');
    if (content) {
        const p = document.createElement('p');
        p.textContent = 'Module 9 initialized successfully.';
        p.style.color = '#007BFF';
        content.appendChild(p);
    }
})();