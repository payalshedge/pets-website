function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function submitForm(event) {
  event.preventDefault();
  const msg = document.getElementById("form-msg");
  msg.textContent = "Thanks for contacting us! We'll be in touch soon 🐾";
  msg.style.color = "green";
}
