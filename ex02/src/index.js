// Only change code below this line
function* myGenerator() {
  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

function* insideGenerator1() {
  for (let x = 1; x < 6; x++) {
    yield x;
  }
}

function* insideGenerator2() {
  for (let x = 10; x < 16; x++) {
    yield x;
  }
}

function* insideGenerator3() {
  for (let x = 6; x < 10; x++) {
    yield x;
  }
}

let iterator = myGenerator();
let fifteenArray = [];
let value;
let str = "";
for (let i = 0; i < 16; i++) {
  value = iterator.next().value;
  value ? (str += value + "#, ") : (str += value + "!");
}
fifteenArray.push(str);
console.log(fifteenArray[0]);

// Only change code above this line
module.exports = { fifteenArray, myGenerator };
