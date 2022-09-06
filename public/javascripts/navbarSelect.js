window.addEventListener('load', () => {


    navbarTablet = document.getElementById('navbar-tablet')
    nameTitle = document.getElementById('name')


    let sessionLink
    let elementSelected


    Array.from(navbarTablet.children).forEach((element) => {

        if (sessionStorage.getItem('linkSelected') == element.innerText) {
            element.children[0].classList.add('isSelected')
        }

        element.onclick = (e) => {
            console.log(element.children[0])
            elementSelected = element
            element.children[0].classList.add('isSelected')
            sessionLink = sessionStorage.setItem('linkSelected', element.innerText)

            Array.from(navbarTablet.children).forEach((element) => {
                if (element != elementSelected) {
                    element.children[0].classList.remove('isSelected')
                }
            })
        }
    })


    nameTitle.onclick = async () => {
        let result = new Promise((resolve, reject) => {
            Array.from(navbarTablet.children).forEach((element) => {
                element.children[0].classList.remove('isSelected')
            })
            resolve('foo')
        })
        result.then(() => {
            sessionStorage.clear()
            location.href = "/"
        })

    }












})