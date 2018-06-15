function Pizza() {
  this.size = size;
  this.toppings = [];
}

$(document).ready(function() {
  console.log("Working...");

  $("#meats").click(function() {
    $(".toppings-accordion-body").slideToggle(900);
  });
});