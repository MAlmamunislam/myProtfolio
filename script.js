// Scroll to Contact Section
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ 
    behavior: "smooth" 
  });
}

// Form Validation
document.getElementById("contactForm")
.addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill all fields!";
    formMessage.classList.remove("text-success");
    formMessage.classList.add("text-error");
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.classList.remove("text-error");
    formMessage.classList.add("text-success");
  }
});