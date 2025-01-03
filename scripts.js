document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
      alert("Thank you for reaching out, " + name + "!");
      document.getElementById("contactForm").reset();
  } else {
      alert("Please fill out all fields.");
  }
});
