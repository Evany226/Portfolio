console.log("connected");

const introList = ["Welcome!", "Hello!", "Hey there!"];

const cycle = document.querySelector(".intro-title");
let i = 0;
const cycleText = () => {
  cycle.innerHTML = introList[i];
  i = ++i % introList.length;
};
cycleText();
setInterval(cycleText, 3000);
