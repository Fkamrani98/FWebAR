const btnlogin = document.getElementById("submitlogin");
const btnRegister = document.getElementById("submitregister");
async function login() {
  const usernameInput = document.getElementById("usernameLogin").value;
  const passwordInput = document.getElementById("passwordLogin").value;
  await axios
    .post("http://107.181.112.52:8080/login/", {
      "username": usernameInput,
      "password": passwordInput,
      Accept: "application/json",
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function Register() {
  const emailInput = document.getElementById("emailRegister").value;
  const phoneInput = document.getElementById("phoneRegister").value;
  const usernameInput = document.getElementById("usernameRegister").value;
  const passwordInput = document.getElementById("passwordRegister").value;
  await axios
    .post("http://107.181.112.52:8080/user/", {
      "username":usernameInput,
      "password":passwordInput,
      "email":emailInput,
      "phone_number":phoneInput,
      Accept: "application/json",
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

btnlogin.addEventListener("click", login);
btnRegister.addEventListener("click", Register);

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
