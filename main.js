
// MOBILE MENU

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

if (menuButton && navigation) {

    menuButton.addEventListener('click', () => {

        const isOpen = navigation.classList.toggle('is-open');

        menuButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        menuButton.setAttribute(
            'aria-label',
            isOpen ? 'Закрыть меню' : 'Открыть меню'
        );

    });

    navigation.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            navigation.classList.remove('is-open');

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

            menuButton.setAttribute(
                'aria-label',
                'Открыть меню'
            );

        });

    });

}


// CURRENT YEAR

const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
