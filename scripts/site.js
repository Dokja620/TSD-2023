//Intersection Observer for coloring effects
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('color')
        } else{
            entry.target.classList.remove('color')
        }
    })
})
const toscrollElements = document.querySelectorAll('.scroll')
toscrollElements.forEach((el) => observer.observe(el))

//navbar
let menu = document.querySelector('.burger')
let menuToggle = document.querySelector('.nav-links')

menu.onclick = function(){
    menuToggle.classList.toggle('open')
}