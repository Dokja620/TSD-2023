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

//loader
let loader = document.getElementById('loader')

window.addEventListener('load', function(){
    loader.style.transform = 'translateX(-100%)'
    loader.classList.add('dissapear')
    
})

//navbar
let menu = document.querySelector('.burger')
let menuToggle = document.querySelector('.nav-links')

menu.onclick = function(){
    menuToggle.classList.toggle('open')
}