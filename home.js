const links = document.querySelector(".socialLinks")
const menus = document.querySelectorAll("main")

const homebtn = document.querySelector(".homeBtn")
const homemenu = document.querySelector(".home")

const gallerybtn = document.querySelector(".galleryBtn")
const gallerymenu = document.querySelector(".gallery")

const card = document.querySelector(".card")
const homecard = document.querySelector(".homecard")
const sidecard = document.querySelector(".side-card")

function homebtnactive(){
  menus.forEach((item)=>
  item.classList.remove('active-window'));
  homemenu.classList.add('active-window')
}
function gallerybtnactive(){
  menus.forEach((item)=>
  item.classList.remove('active-window'));
  gallerymenu.classList.add('active-window')
}


function linkToggle(){
  links.classList.toggle('activated')
}
function commInfoToggle(){
  card.classList.toggle('card-toggle');
  homecard.classList.toggle('homecard-toggle')
  sidecard.classList.toggle('side-card-toggle')
}

function locationHashChanged() {
  if (location.hash === '#home') {
    homebtnactive()
  } else if (location.hash === '#gallery'){
    gallerybtnactive()
  }
}
homebtn.onclick = homebtnactive
gallerybtn.onclick = gallerybtnactive
window.onhashchange = locationHashChanged;