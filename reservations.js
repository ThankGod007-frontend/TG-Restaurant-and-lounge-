// Handle form submission
document.getElementById("reservation-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  // Collect form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;

  // Simple confirmation alert
  alert(
    `Reservation Confirmed!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`
  );

  // Optionally reset the form
  document.getElementById("reservation-form").reset();
});
