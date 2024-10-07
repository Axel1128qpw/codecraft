window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('h2, .service-item');
    let scrollTop = window.scrollY;

    elements.forEach(element => {
        let offsetTop = element.offsetTop;
        if (scrollTop > offsetTop - window.innerHeight + 100) {
            element.classList.add('visible');
        }
    });
});
