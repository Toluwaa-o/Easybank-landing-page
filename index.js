const hamMenu = document.getElementById('ham-menu')
const navBar = document.getElementById('nav-bar')

hamMenu.addEventListener('click', () => {
    if(hamMenu.getAttribute('src') === 'images/icon-hamburger.svg'){
        hamMenu.setAttribute('src', 'images/icon-close.svg');
        navBar.style.display = 'unset'
    }else {
        hamMenu.setAttribute('src', 'images/icon-hamburger.svg');
        navBar.style.display = 'none'
    }
})