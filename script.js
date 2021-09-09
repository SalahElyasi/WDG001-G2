function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function alertFunction() {
  alert("Try to share Recipe...");
}

// -----------------random color-------------
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  document.body.style.background = getRandomColor();
}
//----------------------
function setDarkColor() {
  document.body.style.background = "#666666";
}
function setLightColor() {
  document.body.style.background = "#FFFFFF";
}

// ----------------------up---------------

let btn = $("#button_up");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
