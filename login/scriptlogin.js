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

const BASE_URL = `http://5.239.167.135:1234`
axios.post(URL=`${BASE_URL}/login/`, {
  email: 'ftmh323@gmail.com',
  password: '12345678',
  username: 'ftmh232',
  phone_number:'09923765228',
})
  .then((res)=>console.log(res))
  .catch((err)=>console.log(err))
