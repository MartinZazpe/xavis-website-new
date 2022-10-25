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
    const noDisplay = document.getElementsByClassName('noDisplay')
    const headShotsContainer = document.getElementById('headshots-container')
    const copyright = document.getElementById('copyright')


    // const hambMenuNav = document.getElementById('hamburguer-menu-navbar')
    // const bar1Nav = document.querySelector('#hamburguer-menu-navbar .bar1-nav')
    // const bar2Nav = document.querySelector('#hamburguer-menu-navbar .bar2-nav')
    // const bar3Nav = document.querySelector('#hamburguer-menu-navbar .bar3-nav')

    const name = document.querySelector('#name').onclick = () => {
        location.href = "/"
    }



    let selectedImg = ""

    Array.from(headShotsContainer.children).forEach((child, index) => {

        // for (let i = 0;i < headShotsContainer.children.length;i++) {
        //     headShotsContainer.style.overflow = "scroll"
        //     headShotsContainer.children[i].classList.remove('dimHeadshot')
        //     headShotsContainer.children[i].classList.remove('enlarge')
        // }

        child.onclick = () => {
            // console.log(headShotsContainer.children[index])
            selectedImg = headShotsContainer.children[index]
            headShotsContainer.children[index].classList.toggle('enlarge')
            // headShotsContainer.children[index].scrollIntoView({ block: "center", behavior: "smooth" })
            headShotsContainer.style.overflow = "hidden"
            if (selectedImg.classList.contains('enlarge')) {
                for (let i = 0;i < headShotsContainer.children.length;i++) {
                    if (!headShotsContainer.children[i].classList.contains('enlarge')) {
                        headShotsContainer.children[i].classList.toggle('dimHeadshot')
                    }
                }
            }
            else {
                for (let i = 0;i < headShotsContainer.children.length;i++) {
                    if (!headShotsContainer.children[i].classList.contains('enlarge')) {
                        headShotsContainer.style.overflow = "scroll"
                        headShotsContainer.children[i].classList.toggle('dimHeadshot')
                        selectedImg.classList.remove('dimHeadshot')
                    }
                }
            }
        }
    })


    let escapeImg = window.onkeydown = (e) => {
        if (e.key == "Escape") {
            if (escapeImg && selectedImg.classList.contains('enlarge')) {
                selectedImg.classList.remove('dimHeadshot')
                selectedImg.classList.remove('enlarge')
                for (let i = 0;i < headShotsContainer.children.length;i++) {
                    if (!headShotsContainer.children[i].classList.contains('enlarge')) {
                        headShotsContainer.children[i].classList.remove('dimHeadshot')
                        headShotsContainer.style.overflow = "scroll"
                        selectedImg.classList.remove('dimHeadshot')
                    }
                }
            }
        }
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
            socialLinks.style.display = "inherit"
            bar1.classList.toggle('transformToX1')
            bar2.classList.toggle('noDisplay')
            bar3.classList.toggle('transformToX2')
        } else {
            lateralNavbar.style.display = "none"
            copyright.style.display = "none"
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

        Array.from(headShotsContainer.children).forEach((child, index) => {
            selectedImg.classList.remove('dimHeadshot')
            selectedImg.classList.remove('enlarge')
            for (let i = 0;i < headShotsContainer.children.length;i++) {
                if (!headShotsContainer.children[i].classList.contains('enlarge')) {
                    headShotsContainer.children[i].classList.remove('dimHeadshot')
                    headShotsContainer.style.overflow = "scroll"
                    selectedImg.classList.remove('dimHeadshot')
                }
            }
        })
    }


})

