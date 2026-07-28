(function() {
    const colors = [
        '#EA1889', // Pink
        '#FED600', // Yellow
        '#33DDFF', // Cyan
        '#FE5C00', // Orange
        '#43E608'  // Green
    ];
    
    let currentIndex = 0;
    const root = document.documentElement;
    
    function rotateColor() {
        currentIndex = (currentIndex + 1) % colors.length;
        root.style.setProperty('--rotating-color', colors[currentIndex]);
    }
    
    // Rotate every 5 seconds
    setInterval(rotateColor, 5000);
})();