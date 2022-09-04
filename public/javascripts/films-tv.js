window.addEventListener('load', () => {


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
    const noDisplay = document.getElementsByClassName('noDisplay')
    var headShotsContainer = document.getElementById('headshots-container')
    const copyright = document.getElementById('copyright')
    const gorditaChroniclesImg = document.getElementById('gorditaChroniclesImg')
    const gorditaChroniclesVid = document.getElementById("gorditaChroniclesVid")
    const workDescription = document.querySelector('.work-description')



    const hambMenuNav = document.getElementById('hamburguer-menu-navbar')
    const bar1Nav = document.querySelector('#hamburguer-menu-navbar .bar1-nav')
    const bar2Nav = document.querySelector('#hamburguer-menu-navbar .bar2-nav')
    const bar3Nav = document.querySelector('#hamburguer-menu-navbar .bar3-nav')

    const name = document.querySelector('#name').onclick = () => {
        location.href = "/"
    }



    hambMenu.addEventListener('click', function () {
        lateralNavbar.classList.toggle('active')
        if (lateralNavbar.classList.contains('active')) {
            copyright.style.display = "initial"
            lateralNavbar.classList.toggle('appearVisible')
            lateralMenuNavbar.classList.toggle('noDisplay')
            lateralMenuLinks.classList.toggle('noDisplay')
            lateralNavbar.style.display = "initial"
            footer.classList.toggle('footerTransition')
            socialLinks.classList.toggle('w50')
            bar1.classList.toggle('transformToX1')
            bar2.classList.toggle('noDisplay')
            bar3.classList.toggle('transformToX2')
        } else {
            copyright.style.display = "none"
            lateralNavbar.style.display = "none"
            footer.classList.toggle('footerTransition')
            lateralNavbar.classList.toggle('appearVisible')
            lateralMenuNavbar.classList.toggle('noDisplay')
            lateralMenuLinks.classList.toggle('noDisplay')
            socialLinks.classList.toggle('w50')
            bar1.classList.toggle('transformToX1')
            bar2.classList.toggle('noDisplay')
            bar3.classList.toggle('transformToX2')
            hambMenu.style.display = "inherit"
        }
    })


    // gorditaChroniclesImg.onclick = () => {
    //     workDescription.style.display = "none"
    //     gorditaChroniclesImg.style.display = "none"
    //     gorditaChroniclesVid.style.display = "initial"
    // }






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