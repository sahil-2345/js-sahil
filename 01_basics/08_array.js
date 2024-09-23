//  Array

const myArr = [0, 1, 2, 3, 4, 5 ]
const myHeroes = ["ironman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//  Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(10)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(69));

// const newArr = myArr.join()
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A" , myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B" , myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["batman", "flash", "superman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("SAHIL"))
console.log(Array.from("SAHIL"))
console.log(Array.from({name: "Sahil"}))

let Score1 = 100
let Score2 = 200
let Score3 = 300
console.log(Array.of(Score1, Score2, Score3));
