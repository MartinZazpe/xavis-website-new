window.addEventListener('load', () => {


    navbarTablet = document.getElementById('navbar-tablet')
    nameTitle = document.getElementById('name')


    // let sessionLink
    // let elementSelected


    // Array.from(navbarTablet.children).forEach((element) => {

    //     if (sessionStorage.getItem('linkSelected') == element.innerText) {
    //         element.children[0].classList.add('isSelected')
    //     }

    //     element.onclick = (e) => {
    //         console.log(element.children[0])
    //         elementSelected = element
    //         element.children[0].classList.add('isSelected')
    //         sessionLink = sessionStorage.setItem('linkSelected', element.innerText)

    //         Array.from(navbarTablet.children).forEach((element) => {
    //             if (element != elementSelected) {
    //                 element.children[0].classList.remove('isSelected')
    //             }
    //         })
    //     }
    // })


    let currentView = window.location.pathname

    console.log(currentView)

    let selectedElement

    Array.from(navbarTablet.children).forEach((element) => {

        selectedElement = element

        if (element.querySelector('li').innerText == "My headshots" && currentView == '/headshots') {
            element.classList.add('isSelected')
        }
        else if (element.querySelector('li').innerText == "My story" && currentView == '/myStory') {
            element.classList.add('isSelected')

        }
        else if (element.querySelector('li').innerText == "Film & TV" && currentView == '/film&Tv') {
            element.classList.add('isSelected')

        }
        else if (element.querySelector('li').innerText == "Resume" && currentView == '/myResume') {
            element.classList.add('isSelected')

        }
        else if (element.querySelector('li').innerText == "contact" && currentView == '/contact') {
            element.classList.add('isSelected')
        }
        else if (element.querySelector('li').innerText == `Let's talk` && currentView == '/contact') {
            element.classList.add('isSelected')
        }
    })







    // nameTitle.onclick = async () => {
    //     let result = new Promise((resolve, reject) => {
    //         Array.from(navbarTablet.children).forEach((element) => {
    //             element.children[0].classList.remove('isSelected')
    //         })
    //         resolve('foo')
    //     })
    //     result.then(() => {
    //         sessionStorage.clear()
    //         location.href = "/"
    //     })

    // }












})