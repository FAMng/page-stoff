window.addEventListener('scroll', function() {
    if (window.innerWidth <= 780) {
        var header = document.getElementById('header');
        var block = document.querySelector('.content__top');

        if (window.scrollY > block.offsetTop) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.65)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    }
});
