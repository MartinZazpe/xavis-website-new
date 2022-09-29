window.addEventListener("load", function () {


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




    headShotJump.onclick = () => {
        console.log('headshot clicked')
    }


    const name = document.querySelector('#name').onclick = () => {
        location.href = "/"
    }




    hambMenu.addEventListener('click', function () {
        lateralNavbar.classList.toggle('active')
        if (lateralNavbar.classList.contains('active')) {
            lateralNavbar.classList.toggle('appearVisible')
            lateralMenuNavbar.classList.toggle('noDisplay')
            lateralMenuLinks.classList.toggle('noDisplay')
            lateralNavbar.style.display = "initial"
            headShotJump.classList.toggle('headShotJumpTransition')
            footer.classList.toggle('footerTransition')
            socialLinks.classList.toggle('w50')
            socialLinks.style.display = "inherit"
            bar1.classList.toggle('transformToX1')
            bar2.classList.toggle('noDisplay')
            bar3.classList.toggle('transformToX2')
        } else {
            lateralNavbar.style.display = "none"
            headShotJump.classList.toggle('headShotJumpTransition')
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
        headShotJump.classList.remove('headShotJumpTransition')
        lateralNavbar.classList.remove('appearVisible')
        lateralNavbar.classList.remove('active')
        footer.classList.remove('footerTransition')
        bar1.classList.remove('transformToX1')
        bar2.classList.remove('noDisplay')
        bar3.classList.remove('transformToX2')
        hambMenu.style.display = "inherit"

    }


})


