const emailAddres = document.getElementById("email");
const loginPassword = document.getElementById("password");

const messages = document.querySelector(".message");
// console.log(messages);

const loginButton = document.getElementById("btn");
// console.log(loginButton);

const details = JSON.parse(localStorage.getItem("users"));
// console.log(details);

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  details.forEach((data) => {
    if (data.email === emailAddres.value) {
      if (data.password === loginPassword.value) {
        window.location.href = "index.html";
      } else if (data.password !== loginPassword.value) {
        messages.textContent = "wrong password ???";
      }
    } else if (!Object.values(data).includes(emailAddres.value)) {
      messages.textContent = "No account with that email";
    }
  });
});
