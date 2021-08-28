console.log("connected");

// Triggers the hamburger navbar on mobile//
const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-menu")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
