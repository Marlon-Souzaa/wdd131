document.addEventListener("DOMContentLoaded", () => {

  // Footr
  const year = document.querySelector("#year");
  const lastModified = document.querySelector("#lastModified");

  if (year) year.textContent = new Date().getFullYear();
  if (lastModified) lastModified.textContent = document.lastModified;

  // hamburguer
  const menuButton = document.getElementById("menu");
  const navigation = document.querySelector(".navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("open");
      navigation.classList.toggle("open");
    });
  }

  // Form
  const form = document.querySelector(".contact-form");

  let messages = JSON.parse(localStorage.getItem("messages")) || [];

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector("#name")?.value;
      const email = document.querySelector("#email")?.value;
      const messageText = document.querySelector("textarea")?.value;

      if (!name || !email || !messageText) {
        alert("Please fill all fields");
        return;
      }

      const message = { name, email, text: messageText };

      messages.push(message);
      localStorage.setItem("messages", JSON.stringify(messages));

      alert(`Message sent! Total messages: ${messages.length}`);
      form.reset();
    });
  }

});
