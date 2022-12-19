const toggle = document.querySelector(".toggle")
const menuWrapper = document.querySelector('.menu--wrapper')

const accordions = Array.from(document.querySelectorAll(".accordion"))


toggle.addEventListener('click', event =>{
    menuWrapper.classList.toggle("show--menu-JS")
})

accordions.forEach((accordion) =>{
    const accordionHeader = accordion.querySelector(".accordion--header")
    accordionHeader.addEventListener("click", e =>{
        accordion.querySelector(".accordion--content").classList.toggle("show--menu-JS")
        accordion.querySelector(".fa-chevron-up").classList.toggle("rotate--icon")
    })
})