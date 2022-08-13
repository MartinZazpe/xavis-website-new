window.addEventListener("load", function () {

    console.log('Home JS working')

    const hambMenuContainer = document.getElementById('hambmenu-container')
    const hambMenu = document.getElementById('hamburguer-menu')
    const lateralNavbar = document.getElementById('lateral-navbar')
    const lateralMenuNavbar = document.getElementById('lateral-menu-navbar')
    const lateralMenuLinks = document.getElementById('lateral-menu-links')
    const footer = document.querySelector('footer')
    const socialLinks = document.querySelector('.social-links')
    const bar1 = document.querySelector('#hamburguer-menu .bar1')
    const bar2 = document.querySelector('#hamburguer-menu .bar2')
    const bar3 = document.querySelector('#hamburguer-menu .bar3')
    const headShotJump = document.getElementById('headshots-jump-container')
    const noDisplay = document.getElementsByClassName('noDisplay')


    const hambMenuNav = document.getElementById('hamburguer-menu-navbar')
    const bar1Nav = document.querySelector('#hamburguer-menu-navbar .bar1-nav')
    const bar2Nav = document.querySelector('#hamburguer-menu-navbar .bar2-nav')
    const bar3Nav = document.querySelector('#hamburguer-menu-navbar .bar3-nav')





    hambMenu.addEventListener('click', function () {
        hambMenu.style.display = "none"
        lateralNavbar.classList.add('active')
        if (lateralNavbar.classList.contains('active')) {
            lateralNavbar.style.display = "initial"
            headShotJump.classList.toggle('headShotJumpTransition')
            footer.classList.toggle('footerTransition')
            lateralNavbar.classList.toggle('appearVisible')
            lateralMenuNavbar.classList.toggle('noDisplay')
            lateralMenuLinks.classList.toggle('noDisplay')
            socialLinks.classList.toggle('w50')
            bar1Nav.classList.toggle('transformToX1')
            bar2Nav.classList.toggle('noDisplay')
            bar3Nav.classList.toggle('transformToX2')
        }
        hambMenuNav.onclick = () => {
            lateralNavbar.style.display = "none"
            headShotJump.classList.toggle('headShotJumpTransition')
            footer.classList.toggle('footerTransition')
            lateralNavbar.classList.toggle('appearVisible')
            lateralMenuNavbar.classList.toggle('noDisplay')
            lateralMenuLinks.classList.toggle('noDisplay')
            socialLinks.classList.toggle('w50')
            bar1Nav.classList.toggle('transformToX1')
            bar2Nav.classList.toggle('noDisplay')
            bar3Nav.classList.toggle('transformToX2')
            hambMenu.style.display = "inherit"
        }
    })


    window.onresize = () => {
        headShotJump.classList.remove('headShotJumpTransition')
        lateralNavbar.classList.remove('appearVisible')
        footer.classList.remove('footerTransition')
        hambMenu.style.display = "inherit"
        bar1Nav.classList.remove('transformToX1')
        bar2Nav.classList.remove('noDisplay')
        bar3Nav.classList.remove('transformToX2')
    }


})


