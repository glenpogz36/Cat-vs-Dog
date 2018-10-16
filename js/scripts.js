$(document).ready(function() {
  $("button#Bark").click(function() {
    $("ul#user").prepend("<li>Bark!</li>");
    $("ul#webpage").prepend("<li>Meow!</li>");
  });

  $("button#Meow").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Bark</li>");
  });
});
