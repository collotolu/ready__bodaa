const form = document.querySelector("#inputAppllication");
console.log(form);

const messages = document.querySelector(".message");
console.log(messages);

const inputItems = document.querySelectorAll("input");
console.log(inputItems);

const pressButton = document.getElementById("btn");
console.log(pressButton);

document.getElementById("loanForm").addEventListener("submit", (event) => {
  event.preventDefault();

  let price = parseFloat(document.getElementById("price").value);
  let downPayment = parseFloat(document.getElementById("downPayment").value);
  let loanTerm = parseFloat(document.getElementById("loanTerm").value);

  let loanAmount = price - downPayment;
  let monthlyInterestRate = 0.05 / 12;
  let months = loanTerm * 12;
  let monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -months));

  let resultElement = document.getElementById("result");
  resultElement.innerHTML =
    "<p>Boda Value: " + loanAmount.toFixed(2) + " ksh</p>";
  resultElement.innerHTML +=
    "<p>Monthly payment: " + monthlyPayment.toFixed(2) + " ksh</p>";
});

pressButton.addEventListener("click", (event) => {
  event.preventDefault();

  let allValidated = false;
  inputItems.forEach((input) => {
    if (input.value === "" || input.value === null) {
      messages.textContent = "Fill all the empty Fields";
      input.style.border = "1px solid red";
    } else {
      input.style.border = "1px solid black";
      messages.textContent = "";
    }
  });

  if (messages.textContent === "") {
    allValidated = true;
  }

  emailjs.init({
    publicKey: "mZoERcoOGLkzLLKfo",
  });
  
  emailjs.sendForm("service_byc8raf", "contact form", form).then(
    () => {
      console.log("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});

