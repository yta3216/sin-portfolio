const links = document.querySelector(".socialLinks")
const menus = document.querySelectorAll("main")

const homebtn = document.querySelector(".homeBtn")
const homemenu = document.querySelector(".home")

const gallerybtn = document.querySelector(".galleryBtn")
const gallerymenu = document.querySelector(".gallery")

homebtn.onclick = function(){
  menus.forEach((item)=>
  item.classList.remove('active-window'));
  homemenu.classList.add('active-window')
}
gallerybtn.onclick = function(){
  menus.forEach((item)=>
  item.classList.remove('active-window'));
  gallerymenu.classList.add('active-window')
}

function linkToggle(){
  links.classList.toggle('activated')
}
