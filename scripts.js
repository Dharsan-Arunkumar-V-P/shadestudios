document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name && email) {
      alert("Thank you, " + name + "! Your form has been submitted.");
  } else {
      alert("Please fill out all fields.");
  }
});
