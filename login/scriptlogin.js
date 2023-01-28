const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btnlogin = document.getElementById("submitlogin");

const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

btnlogin.addEventListener("click", () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  axios.post("https://reqres.in/api/login", {
    username: username,
    password: password
  })
    .then((response) => {
      console.log(response);
    });
});

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


