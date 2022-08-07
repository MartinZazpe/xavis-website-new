window.addEventListener("load", function () {

    console.log('Home JS working')

    const hambMenu = document.getElementById('hamburguer-menu')
    const lateralNavbar = document.getElementById('lateral-navbar')
    const lateralMenuNavbar = document.getElementById('lateral-menu-navbar')
    const lateralMenuLinks = document.getElementById('lateral-menu-links')
    const footer = document.querySelector('footer')
    const headShotsJumpContainer = document.getElementById('headshots-jump-container')
    const socialLinks = document.querySelector('.social-links')
    const bar1 = document.querySelector('#hamburguer-menu .bar1')
    const bar2 = document.querySelector('#hamburguer-menu .bar2')
    const bar3 = document.querySelector('#hamburguer-menu .bar3')

    hambMenu.addEventListener('click', function () {
        lateralNavbar.classList.toggle('appearVisible')
        hambMenu.classList.toggle('zindex3')
        hambMenu.classList.add('active')
        lateralMenuNavbar.classList.toggle('noDisplay')
        lateralMenuLinks.classList.toggle('noDisplay')
        socialLinks.classList.toggle('w50')


        if (hambMenu.classList.contains('active')) {
            headShotsJumpContainer.classList.toggle('footerTransition')
            footer.classList.toggle('footerTransition')
            bar1.classList.toggle('transformToX1')
            bar2.classList.toggle('noDisplay')
            bar3.classList.toggle('transformToX2')
        }
    })




})