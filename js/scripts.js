function Pizza(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  this.price = this.sizePrice() +  this.toppingsCost();
}

Pizza.prototype.toppingsCost = function() {
  var toppingsToBuy = this.toppingsCount() - this.toppingsLimit();
  if (toppingsToBuy > 0) return toppingsToBuy * this.costPerTopping();
  return 0;
}

Pizza.prototype.toppingsCount = function() {
  return this.toppings.length;
}

Pizza.prototype.toppingsLimit = function() {
  return 3;
}

Pizza.prototype.costPerTopping = function() {
  return 2;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small") {
    return 14;
  } else if (this.size === "medium") {
    return 18;
  } else if (this.size === "large") {
    return 20;
  }
}

function validateAndBuild() {
  if (validate("#name") && validate("#pizza-size")) {
    buildPizzaOrder();
  } else {
    alert("Stop trying to break things...");
  }
}

function validate(id) {
  if ($(id).val() !== "") return true;
}

function buildPizzaOrder() {
  var name = $("#name").val();
  var size = $("#pizza-size").val();
  var toppings = getToppings();
  var pizza = new Pizza(name, size, toppings);
  pizza.calculatePrice();
  console.log(pizza);
}

function getToppings() {
  var list = [];
  $("input:checked").each(function(index, topping) {
    list.push(topping.value);
  });
  return list;
}

$(document).ready(function() {
  $("#order-now").click(function() {
    $(this).fadeToggle().off("click");
    $("#order-box").fadeToggle(1000);
  });

  $("#clear-order").click(function() {
    $("#order-form")[0].reset();
  });

  $("#order-form").submit(function(e) {
    e.preventDefault();

    validateAndBuild();
  });

  $("#confirm-order").click(function() {

  });

  $("#meats").click(function() {
    $("#meats-content").slideToggle(900);
  });

  $("#non-meats").click(function() {
    $("#non-meats-content").slideToggle(900);
  });
});