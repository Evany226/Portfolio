console.log("connected");

//Cycles Text on Introduction page
const introList = ["Welcome!", "Hello!", "Hey there!"];
const cycle = document.querySelector(".intro-title");

let i = 0;
const cycleText = () => {
  cycle.innerHTML = introList[i];
  i = (i + 1) % introList.length;
};
cycleText();
setInterval(cycleText, 4000);

// Triggers the hamburger navbar on mobile//
const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-menu")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
