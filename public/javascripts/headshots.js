window.addEventListener("load", function () {

    console.log('headshots JS working')

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


    const hambMenuNav = document.getElementById('hamburguer-menu-navbar')
    const bar1Nav = document.querySelector('#hamburguer-menu-navbar .bar1-nav')
    const bar2Nav = document.querySelector('#hamburguer-menu-navbar .bar2-nav')
    const bar3Nav = document.querySelector('#hamburguer-menu-navbar .bar3-nav')


    // var activeImg
    // Array.from(headShotsContainer.children).forEach((child, index) => {
    //     child.onclick = () => {
    //         console.log(headShotsContainer.children[index])
    //         headShotsContainer.children[index].classList.toggle('enlarge')
    //         for (theRest of headShotsContainer.children) {
    //             if (theRest.classList.contains('enlarge')) {
    //                 theRest.scrollIntoView({ block: "center", behavior: "smooth" })
    //                 activeImg = theRest
    //                 console.log(activeImg)
    //             }
    //             if (activeImg.classList.contains('enlarge') && !theRest.classList.contains('enlarge')) {
    //                 theRest.classList.add('dimHeadshot')
    //             }
    //             else if (!theRest.classList.contains('enlarge')) {
    //                 theRest.classList.remove('dimHeadshot')
    //             }
    //         }
    //     }
    // })

    let selectedImg
    Array.from(headShotsContainer.children).forEach((child, index) => {
        child.onclick = () => {
            console.log(headShotsContainer.children[index])
            selectedImg = headShotsContainer.children[index]
            headShotsContainer.children[index].classList.toggle('enlarge')
            headShotsContainer.children[index].scrollIntoView({ block: "center", behavior: "smooth" })
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





















    for (var i = 0;i < headShotsContainer.length;i++) {
        console.log(headShotsContainer[i])
    }



    hambMenu.addEventListener('click', function () {
        hambMenu.style.display = "none"
        lateralNavbar.classList.add('active')
        if (lateralNavbar.classList.contains('active')) {
            lateralNavbar.style.display = "initial"

            // footer.classList.toggle('footerTransition')
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
            // footer.classList.toggle('footerTransition')
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


