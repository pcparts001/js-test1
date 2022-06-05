/**
 *
 */

// var val1 = "var variable";
// console.log(val1)

// val1 = "var variable update"
// console.log(val1)

// var val1 = "var redeclaration"
// console.log(val1)

// let val2 = "let variable"
// console.log(val2)

// val2 = "let variable override"
// console.log(val2)

// let val2 = "var redeclaration"

// const val3 = 'const declaration'
// console.log(val3)

// val3 = 'new'

const val4 = {
  name: "Sam",
  age: 28
};

console.log(val4);
val4.name = "Justin";

console.log(val4);

val4.address = "Tokyo";

const val5 = ["dog", "cat"];
console.log(val5);
val5[0] = "dragon";
console.log(val5);
val5.push("fairly");
console.log(val5);

/**
 * template string
 */

// const name = 'John';
// const age = 30;

// //previous
// const message = "My name is" + name +"and age is " + age;
// console.log(message);

// //TEmplate
// const message2 = `My name is ${name}.  Age is ${age}.`;
// console.log(message2);

/**
 * Arrow function
 */

//Previous
// function func1(str){
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1('test desu'));

//Arrow function
// const func2 = (str) => {
//   return str;
// };

// console.log(func2('arrow function test'));

// const func3 = (str) => str;
// console.log(func3("hihi"));

// const func4 = (num1,num2) => num1+num2;
// console.log(func4(1,10));

/**
 * 分割代入
 */

// const myProfile = {
//   name : 'John',
//   age : 30,
// };

// const message1 = `My name is ${myProfile.name}. Age is ${myProfile.age}.`;
// console.log(message1);

// const {name1, age1} = myProfile;
// const message3 = `My name is ${name1}. Age is ${age1}.`;
// console.log(message3);

// const myProfile = ['John',40];
// const message3 = `My name is ${myProfile[0]}. Age is ${myProfile[1]}`
// console.log(message3);

// const [name5,age5] = myProfile;
// const message4 = `Hi am ${name5}.  And am ${age5}`
// console.log(message4);

// const sayHello = (name = 'John') => console.log(`Hello ${name}`);

// sayHello('Tom');

// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);

// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

const arr4 = [10, 20];
const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6)
// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0]=100;
// console.log(arr4[0]);
