// using rest parameter with function parameters

function countArgs(...args) {
	return "We have following arguments : " + args.length;
}

console.log(countArgs(0,1,20,40));
console.log(countArgs("Sourav",null,[1,2,3,4],{},123));

// unpacking using the spread operator

const arr = [10, 12, 50, 61, 24];
const max_arr = Math.max(...arr);
console.log("sum of array is : " + max_arr);

// spread operator is passed as an argument to a function or in an array literal

//const spreaded = ...arr; // this will throw a syntax error

// destructing assignment to extract object values

const user = {name: 'Bob', age: 24};

const {name, age} = user;
console.log("name is : "+name);
console.log("age is : "+age);
