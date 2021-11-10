let button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);
button.addEventListener("click", function () {
  alert("Aaron is a great person even though he hates me so much and I cry all the time because of him");
});

let btn = document.getElementById("btn");
btn.addEventListener("click", poop);

function poop() {
  let msg = document.getElementById("txt").value;
  alert(msg);
}

let div = document.getElementById("box");
div.addEventListener("mouseenter", function () {
  div.style.backgroundColor = "green";
});

div.addEventListener("mouseleave", function () {
  div.style.backgroundColor = "tan";
});

let para = document.getElementById("para");
let colors = ["#F33B14", "#14F340", "#1439F3", "#F314D8", "#14F3F3", "#E9F314", "#F36814", "#F3146F"];
function switchColor() {
  let colorChange = colors[Math.floor(Math.random() * 8)];
  return colorChange;
}

para.addEventListener("click", function () {
  let colorChange = switchColor();
  para.style.color = colorChange;
});

let div1 = document.createElement("div");
document.body.appendChild(div1);
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  let span = document.createElement("span");
  div1.appendChild(span);
  span.textContent = "Alex Loper";
});

let friends = ["Aaron", "Zach", "Fred", "John", "Jack", "Kody", "William", "James", "Patrick", "Joe"];
let ul = document.getElementById("ul");
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function () {
  for (let i = 0; i < friends.length; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = friends[i];
  }
});
