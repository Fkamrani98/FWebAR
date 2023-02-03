const mainURL = "http://107.181.112.52:8080";
const btnDeleteUser = document.getElementById("btnDeleteUser");
const btnDeleteUserSendCode = document.getElementById("btnDeleteUserSendCode");
const auth = Cookies.get("token");
if (!auth) {
    window.location.href = '/login/index.html'
}
const btnlogout = document.getElementById("logout");
function logout() {
  Cookies.remove("token");
  window.location.href = "/index.html";
}
async function DeletUserSendCode() {
  const InputDeleteUser = document.getElementById("InputDeleteUser").value;
  await axios
    .post(`${mainURL}/delete_user/`, {
      username: InputDeleteUser,
      Accept: "application/json",
    })
    .then((response) => {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
async function DeletUser() {
  const InputDeleteUser = document.getElementById(
    "InputDeleteUserRemember"
  ).value;
  const InputCodeDeleteUser = document.getElementById(
    "InputCodeDeleteUser"
  ).value;
  try {
    await axios.get(
      `${mainURL}/delete_user?username=${InputDeleteUser}&code=${InputCodeDeleteUser}`
    );
    Cookies.remove("token");
    window.location.href = '/index.html'
  } catch (error) {
    console.log(error);
  }
}
btnlogout.addEventListener("click", logout);
btnDeleteUserSendCode.addEventListener("click", DeletUserSendCode);
btnDeleteUser.addEventListener("click", DeletUser);