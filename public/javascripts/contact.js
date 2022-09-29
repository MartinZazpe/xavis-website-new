window.addEventListener('load', () => {


    // const hambMenuContainer = document.getElementById('hambmenu-container')
    const hambMenu = document.getElementById('hamburguer-menu')
    const lateralNavbar = document.getElementById('lateral-navbar')
    const lateralMenuNavbar = document.getElementById('lateral-menu-navbar')
    const lateralMenuLinks = document.getElementById('lateral-menu-links')
    const footer = document.querySelector('footer')
    const socialLinks = document.querySelector('.social-links')
    const bar1 = document.querySelector('#hamburguer-menu .bar1')
    const bar2 = document.querySelector('#hamburguer-menu .bar2')
    const bar3 = document.querySelector('#hamburguer-menu .bar3')
    // const noDisplay = document.getElementsByClassName('noDisplay')
    // var headShotsContainer = document.getElementById('headshots-container')
    const copyright = document.getElementById('copyright')
    const contactContainer = document.getElementById('contact-container')



    document.querySelector('#name').onclick = () => {
        location.href = "/"
    }



    hambMenu.addEventListener('click', function () {
        lateralNavbar.classList.toggle('active')
        if (lateralNavbar.classList.contains('active')) {
            copyright.style.display = "initial"
            contactContainer.style.display = "none"
            lateralNavbar.classList.toggle('appearVisible')
            lateralMenuNavbar.classList.toggle('noDisplay')
            lateralMenuLinks.classList.toggle('noDisplay')
            lateralNavbar.style.display = "initial"
            footer.classList.toggle('footerTransition')
            socialLinks.classList.toggle('w50')
            socialLinks.style.display = "inherit"
            bar1.classList.toggle('transformToX1')
            bar2.classList.toggle('noDisplay')
            bar3.classList.toggle('transformToX2')
        } else {
            copyright.style.display = "none"
            contactContainer.style.display = "initial"
            lateralNavbar.style.display = "none"
            footer.classList.toggle('footerTransition')
            lateralNavbar.classList.toggle('appearVisible')
            lateralMenuNavbar.classList.toggle('noDisplay')
            lateralMenuLinks.classList.toggle('noDisplay')
            socialLinks.classList.toggle('w50')
            socialLinks.style.display = "none"
            bar1.classList.toggle('transformToX1')
            bar2.classList.toggle('noDisplay')
            bar3.classList.toggle('transformToX2')
            hambMenu.style.display = "inherit"
        }
    })

    window.onresize = () => {
        copyright.style.display = "none"
        lateralNavbar.classList.remove('appearVisible')
        footer.classList.remove('footerTransition')
        lateralNavbar.classList.remove('active')
        bar1.classList.remove('transformToX1')
        bar2.classList.remove('noDisplay')
        bar3.classList.remove('transformToX2')
        hambMenu.style.display = "inherit"
    }








})