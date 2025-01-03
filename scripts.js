document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {

      document.getElementById("displayName").textContent = "Name: " + name;
      document.getElementById("displayEmail").textContent = "Email: " + email;
      document.getElementById("submittedInfo").style.display = "block";
      document.getElementById("myForm").reset();
  } else {
      alert("Please fill out all fields.");
  }
});
