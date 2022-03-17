const drop = document.getElementById("active")
const box = document.getElementById("dropdown-content")

drop.addEventListener('click', () =>{
    
    box.classList.toggle("show")
   
})

const menu = document.getElementById("menu")
const menuItem = document.getElementById("menu-item")

menu.addEventListener(('click'), () =>{
    menuItem.classList.toggle('modal')
})