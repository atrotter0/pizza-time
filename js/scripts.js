function Pizza(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.calculatePrice = function() {
  var toppingsToBuy = this.toppingsCount() - this.toppingsLimit();
  var sizePrice = this.sizePrice();
  this.price = sizePrice + (this.toppingsCost() * toppingsToBuy);
}

Pizza.prototype.toppingsCount = function() {
  return this.toppings.length;
}

Pizza.prototype.toppingsLimit = function() {
  return 3;
}

Pizza.prototype.toppingsCost = function() {
  return 2;
}

Pizza.prototype.sizePrice = function() {
  if (this.size === "small") {
    return 14;
  } else if (this.size === "medium") {
    return 18;
  } else {
    return 20;
  }
}

function getToppings() {
  var list = [];
  $("input:checked").each(function(index, topping) {
    list.push(topping.value);
  });
  console.log(list);
  return list;
}

$(document).ready(function() {
  $("#place-order").click(function(e) {
    e.preventDefault();

    var name = $("#name").val();
    var size = $("#pizza-size").val();
    var toppings = getToppings();
    var pizza = new Pizza(name, size, toppings);
    console.log(pizza);
  });

  $("#meats").click(function() {
    $("#meats-content").slideToggle(900);
  });

  $("#non-meats").click(function() {
    $("#non-meats-content").slideToggle(900);
  });
});