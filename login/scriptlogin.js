let prism = document.querySelector(".rec-prism");

function showSignup() {
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin() {
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword() {
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe() {
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showThankYou() {
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}


/*axios.post('http://107.181.112.52:8001/user/', {
  email: 'ftmh323@gmail.com',
  password: '12345678',
  username: 'ftmh232',
  phone_number:'09923765228',
})
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))*/
