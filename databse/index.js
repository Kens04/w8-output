window.addEventListener("DOMContentLoaded", function () {
  let email = document.getElementById("email");
  email.value = localStorage.getItem("email", email);
  let password = document.getElementById("password");
  password.value = localStorage.getItem("password", password);
});

const butotnClick = () => {
  // フォームから入力されたログイン情報を取得する
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // ログイン情報をLocalStorageに保存する
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
}
let button = document.getElementById("button");
button.addEventListener("click", butotnClick);
