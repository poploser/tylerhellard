document.addEventListener('DOMContentLoaded', () => {
    // Find ALL galleries on the page, not just the first one
    const galleries = document.querySelectorAll('.gallery');
    if (galleries.length === 0) return; 

    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const body = document.body;

    // Loop through every gallery and attach the click event to its images
    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                overlay.classList.add('active');
                body.classList.add('lightbox-open');
            });
        });
    });

    const closeLightbox = () => {
        overlay.classList.remove('active');
        body.classList.remove('lightbox-open');
        setTimeout(() => { lightboxImg.src = ''; }, 300); 
    };

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay || e.target === lightboxImg) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeLightbox();
        }
    });
});