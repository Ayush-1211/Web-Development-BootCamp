//$("h1").css("color","red");

$("h1").addClass("big-title");

//$("h1").removeClass("big-title");

//$("h1").hasClass("margin-50");

//$("button").text("Don't Click Me");

//$("h1").text("Ayush Prajapati");

$("button").html("<em>Don't Click Me</em>");

$("img").attr("src", "snare.png");

$("a").attr("href", "https://yahoo.com");

$("h1").click(function() {
  $("h1").css("color", "purple");
});

$("button").click(function() {
  $("h1").css("color", "red");
});

$("input").keypress(function(event) {
  console.log(event.key);
});

$(document).keypress(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "blue");
});

$("h1").before("<button>Before Button</button>");
$("h1").after("<button>After Button</button>");
$("h1").prepend("<button>Prepend Button</button>");
$("h1").append("<button>Append Button</button>");

//$("button").remove();



/*
              --- Animation with jQuery ---

$("button").on("click", function() {
  $("h1").hide();
});

$("button").on("click", function() {
  $("h1").toggle();
});

$("button").on("click", function() {
  $("h1").fadeOut();
});

$("button").on("click", function() {
  $("h1").fadeIn();
});

$("button").on("click", function() {
  $("h1").fadeToggle();
});

$("button").on("click", function() {
  $("h1").slideUp();
});

$("button").on("click", function() {
  $("h1").slideDown();
});

$("button").on("click", function() {
  $("h1").slideToggel();
});

$("button").on("click", function() {
  $("h1").animate({opacity: 0.5});
});

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

*/
