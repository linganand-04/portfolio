// Current Year //

const year = document.querySelector(".year");
const date = new Date().getFullYear();
year.textContent = date;

// Mouse Hover Effect 

const video1 = document.querySelector("#projectVideo1");
const video2 = document.querySelector("#projectVideo2");
const video3 = document.querySelector("#projectVideo3");
const hoverSigns = document.querySelectorAll(".hover-sign");

const videoList = [video1, video2, video3];

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


function sendMail(){

  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let message = document.querySelector("#message");

  let pars = {
    name:name.value,
    email:email.value,
    message:message.value
  }

  if(pars.name === "" || pars.email === "" || pars.message === "" ){
    alert("Kindly complete all required fields before submitting.")
    return 
  }

  console.log(name);

  name.value = "";
  email.value = "";
  message.value = "";

  console.log(name);

  emailjs.send("service_47hwasr","template_uit23sk",pars,"EaWWUE66huE-BlPwl").then(alert("✅ Email sent successfully! We'll get back to you shortly."))
}
