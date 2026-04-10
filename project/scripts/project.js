const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

 const form = document.querySelector(".contact-form");

// pega mensagens já salvas OU cria array vazio
let messages = JSON.parse(localStorage.getItem("messages")) || [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const messageText = document.querySelector("textarea").value;

  // validação
  if (name === "" || email === "" || messageText === "") {
    alert("Please fill all fields");
    return;
  }

  // cria objeto mensagem
  const message = {
    name: name,
    email: email,
    text: messageText
  };

  // adiciona no array
  messages.push(message);

  // salva no localStorage
  localStorage.setItem("messages", JSON.stringify(messages));

  // mostra quantidade
  alert(`Message sent! Total messages: ${messages.length}`);

  // limpa form
  form.reset();
});

const counter = document.createElement("p");
document.body.appendChild(counter);

counter.textContent = `Total messages: ${messages.length}`;