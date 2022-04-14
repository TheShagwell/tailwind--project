(function () {
    const menuToggle = document.querySelector('.menu-toggle');

    menuToggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-active');
    })
})