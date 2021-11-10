$("<button>Click Me!</button>").appendTo("body");
$("button").attr("id", "btn");
$("#btn").on("click", function () {
  alert("Aaron hates me");
});

$("#btn1").on("click", function () {
  let $text = $('input[type="text"]').val();
  alert($text);
});

$(".div").on("mouseenter", function () {
  $(this).css("background-color", "green");
});

$(".div").on("mouseleave", function () {
  $(this).css("background-color", "tan");
});

$("<p>Aaron loves to hate me</p>").appendTo("body");
$("p").attr("id", "para");

function randomNumber() {
  return Math.floor(Math.random() * 255);
}

function randomColor() {
  let r = randomNumber();
  let g = randomNumber();
  let b = randomNumber();
  color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}

$("#para").click(function () {
  $(this).css("color", randomColor());
});

let div2 = $("<div></div>").appendTo("body");
let button2 = $("<button>Click it Buddy</button>").appendTo(div2);

$(button2).click(function () {
  $("<span> Alex </span>").appendTo(div2);
});

let friends = ["Aaron", "Zach", "Fred", "John", "Jack", "Kody", "William", "James", "Patrick", "Joe"];
let count = 0;
$("#btn3").click(function () {
  if (count < 10) {
    $("<li></li>").text(friends[count]).appendTo("#ul");
    count++;
  }
});
