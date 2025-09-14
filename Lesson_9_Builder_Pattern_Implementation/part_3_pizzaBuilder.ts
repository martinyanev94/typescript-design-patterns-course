const myPizza = new PizzaBuilder("Large")
    .setCrust("Thin")
    .addTopping("Mushrooms")
    .addTopping("Pepperoni")
    .addTopping("Olives")
    .build();

console.log(myPizza.describePizza());

typescript
const myPizza = new PizzaBuilder("Large")
    .setCrust("Thin")
    .addTopping("Mushrooms")
    .addTopping("Pepperoni")
    .addTopping("Olives")
    .build();

console.log(myPizza.describePizza());


Pizza Size: Large, Crust: Thin, Toppings: Mushrooms, Pepperoni, Olives

