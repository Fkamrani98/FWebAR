//? ==========================side-server========================
const btnlogin = document.getElementById("submitlogin");
const btnRegister = document.getElementById("submitregister");
const btnSendCodeForget = document.getElementById("submitforget");
const BTNsubmitsms = document.getElementById("submitsms");
// todo forget
const btnUpdateNewPassword = document.getElementById("updateNewPassword").value;
// todo forget end
const mainURL = "http://185.142.156.246:8080";
let userAuth = null;
const auth = Cookies.get("token");
if (auth) {
  window.location.href = "/dashboard/index.html";
}

async function sendSMSactiveUser(userName) {
  await axios
    .post(`${mainURL}/active_phone_numver/`, {
      username: userName,
      Accept: "application/json"
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function sendSMSupdate() {
  const InputSendCodeUpdate = document.getElementById("InputPhoneForget").value;
  const InputUsernameForget = document.getElementById("InputUsernameForget").value;
  await axios
    .post(`${mainURL}/update_user/`, {
      username: InputUsernameForget,
      phone_number: InputSendCodeUpdate,
      Accept: "application/jsoon",
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function activeUser() {
  const InputActiveUser = document.getElementById("InputActiveUser").value;
  const codeSMS = document.getElementById("InputSubmitSms").value;
  await axios
    .get(
      `${mainURL}/active_phone_numver?username=${InputActiveUser}&code=${codeSMS}`
    )
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function login() {
  const usernameInput = document.getElementById("usernameLogin").value;
  const passwordInput = document.getElementById("passwordLogin").value;
  try {
    const userLogin = await axios.post(`${mainURL}/login/`, {
      username: usernameInput,
      password: passwordInput,
      Accept: "application/json",
    });
    userAuth = userLogin.data.access;
    Cookies.set("token", userAuth, { expires: 7 });
    if (userAuth) {
      window.location.href = "/dashboard/index.html";
    }
  } catch (error) {
    console.log(error);
  }
}
async function Register() {
  const emailInput = document.getElementById("emailRegister").value;
  const phoneInput = document.getElementById("phoneRegister").value;
  const usernameInput = document.getElementById("usernameRegister").value;
  const passwordInput = document.getElementById("passwordRegister").value;
  // const log = {emailInput, phoneInput, usernameInput, passwordInput}
  try {
    await axios.post(`${mainURL}/user/`, {
      username: usernameInput,
      password: passwordInput,
      email: emailInput,
      phone_number: phoneInput,
      Accept: "application/json",
    });
    sendSMSactiveUser(usernameInput);
  } catch (error) {
    console.log(error);
  }
}

btnlogin.addEventListener("click", login);
btnRegister.addEventListener("click", Register);
btnSendCodeForget.addEventListener("click", sendSMSupdate);
BTNsubmitsms.addEventListener("click", activeUser);
//! ==========================not-side-server========================
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

function showContactUs() {
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}
