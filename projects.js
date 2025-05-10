// Mouse Hover Effect 

const video1 = document.querySelector("#projectVideo1");
const video2 = document.querySelector("#projectVideo2");
const video3 = document.querySelector("#projectVideo3");
const video4 = document.querySelector("#projectVideo4");
const hoverSigns = document.querySelectorAll(".hover-sign");

const videoList = [video1, video2, video3, video4];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", () => {
    video.play();
    hoverSigns.forEach((sign) => sign.classList.add("active"));
  });

  video.addEventListener("mouseout", () => {
    video.pause();
    hoverSigns.forEach((sign) => sign.classList.remove("active"));
  });
});


// SideBar Effect

const menuButtons = document.querySelectorAll('.menu-icons');
const closeButtons = document.querySelectorAll('.close-icons');
const sideBar = document.querySelector('.side-bar');
const child = document.querySelectorAll('.side-bar ul li')

menuButtons.forEach(menu => {
  menu.addEventListener('click', () => {
    sideBar.classList.add('open-sidebar');
    sideBar.classList.remove('close-sidebar'); 
  });
});

closeButtons.forEach(close => {
  close.addEventListener('click', () => {
    sideBar.classList.add('close-sidebar'); 
    sideBar.classList.remove('open-sidebar');
  });
});

child.forEach(y=>{
  y.addEventListener('click',()=>{
    sideBar.classList.add('close-sidebar'); 
  })
})