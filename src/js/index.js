console.log("connected");

//Constantly swaps text on intro section
const introList = ["Welcome!", "Hello!", "Hey there!"];

const cycle = document.querySelector(".intro-title");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = introList[i];
  i = (i + 1) % introList.length;
};
cycleText();
setInterval(cycleText, 4000);

// Triggers the hamburger navbar on mobile
const toggleButton = document.getElementByClassName("navbar-toggle");
const navbarLinks = document.getElementsByClassName("navbar-menulinks");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
