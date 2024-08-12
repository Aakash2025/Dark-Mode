const header = document.getElementById("header");
const lower = document.getElementById("lower");
const page = document.getElementById("page");
const h1 = document.getElementById("h1");


const btn = document.getElementById("btn");

btn.addEventListener("mouseover", ()=> {
  btn.style.transform = "scale(1.1)";
});
btn.addEventListener("mouseout", ()=> {
  btn.style.transform = "scale(1)";
});

btn.addEventListener("click", ()=> {
  if(btn.textContent === "Dark Mode"){
    header.style.backgroundColor = "rgb(248, 215, 221)";
    header.style.boxShadow = "0px 8px 7px rgba(82, 82, 82, 0.107)";
    h1.style.Color = "black";
    page.style.backgroundColor = "white";
    lower.style.color = "black";
    btn.textContent = "Light Mode";
    btn.style.backgroundColor = "rgb(205,57,84)";
    h1.style.color = "black";
  }
  else if(btn.textContent === "Light Mode"){
    header.style.backgroundColor = "rgb(63,63,63)";
    header.style.boxShadow = "0px 8px 7px rgba(203, 203, 203, 0.107)";
    h1.style.Color = "#fff";
    page.style.backgroundColor = "rgb(12,13,16)";
    lower.style.color = "white";
    btn.textContent = "Dark Mode";
    btn.style.backgroundColor = "black";
    h1.style.color = "white";
  }
});

