const loginBtn = document.querySelector("#loginBtn");
const email = document.querySelector("#loginEmail");
const password = document.querySelector("#loginPassword");
const errorMassage = document.querySelector(".errorMassage");

loginBtn.addEventListener("click", () => {
  let emailValue = loginEmail.value;
  let logPassValue = loginPassword.value;
  let userRecord = JSON.parse(localStorage.getItem("userInfo"));

  userRecord.forEach((value) => {
    let loopValue = value.email;
    let loopPass = value.password;

    if (emailValue === loopValue && logPassValue === loopPass) {
      errorMassage.innerHTML = "Login SuccessFull";
      errorMassage.classList.add("success");
      window.location.href = "./html/index.html";
    } else if (emailValue !== loopValue) {
      errorMassage.innerHTML = "Login failed check Email or Password";
      errorMassage.classList.add("success");
    } else if (logPassValue !== loopPass) {
      errorMassage.innerHTML = "Login failed check Email or Password";
      errorMassage.classList.add("success");
    } else {
      errorMassage.innerHTML = "login failed";
      errorMassage.classList.remove("success");
    }
  });
});
