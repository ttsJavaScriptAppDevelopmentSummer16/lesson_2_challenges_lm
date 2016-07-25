// Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
// Add 'fruit loops' to the list.
shoppingList.push('fruit loops');
// Update 'coffee' to 'fair trade coffee'
shoppingList[4] = 'fair trade coffee';
// Replace 'chips' and 'salsa' with 'rice' and 'beans'
shoppingList.splice(2, 2, "rice", "beans");
console.log(shoppingList);
// Create an empty array to represent your shopping cart.
var shoppingCart = [];
// Remove the last item from your shopping list and add it to your cart
shoppingCart = shoppingList.pop();
console.log(shoppingCart);
// Remove the first item from your shopping list and add it to the cart
shoppingCart = shoppingList.shift();
console.log(shoppingCart);
// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
while (shoppingList.length > 0){
  shoppingCart.push(shoppingList.pop());
}
console.log(shoppingCart);
// Sort the items in your cart alphabetically... backwards
shoppingCart.sort().reverse();
console.log(shoppingCart);
// Print the list of items in your shopping cart to the console as comma separated string.
console.log(shoppingCart.join(", "));
