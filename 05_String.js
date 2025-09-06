// const name = "Kishan"
const repoCount = 50

// console.log( name  +  repoCount + ' Value');

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Kishan-ac-com')

console.log(gameName[7]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 7) // 0 to 3 index tak hee print hoga
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newString1 = "  Kishan    "   // not much need more space
console.log(newString1);
console.log(newString1.trim());

const url = "https://kishan.com/kishan%50mishra"

console.log(url.replace('%50', '__'));

console.log(url.includes('kishan'))

console.log(gameName.split());  //Go to website name(split) in javascript mdn!
