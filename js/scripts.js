function Pizza() {
  this.size = size;
  this.toppings = [];
}

$(document).ready(function() {
  console.log("Working...");

  $("#meats").click(function() {
    $("#meats-content").slideToggle(900);
  });

  $("#non-meats").click(function() {
    $("#non-meats-content").slideToggle(900);
  });
});