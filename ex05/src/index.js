// Only change code below this line
let shoppingList = new Map([
  ["Banana", 3],
  ["Pineapple", 5],
  ["Pear", 2],
  ["Carrot", 10],
  ["Apple", 1.5],
]);

let arrKey = [];
for (let groceries of shoppingList.entries()) {
  arrKey.push("groceries: " + groceries);
}
console.log(arrKey);
let arrValue = [];
for (let amount of shoppingList.values()) {
  arrValue.push("amount: " + amount);
}
console.log(arrValue);
for (let values of shoppingList) {
  console.log(values);
}
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };
