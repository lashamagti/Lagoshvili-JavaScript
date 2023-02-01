// Task 1: Output "Hi" if the entered number is larger than 7.
const number = 8; 
if (number > 7) {
  console.log("Hi");
}

// Task 2: If the name entered is Vyacheslav, output "Hi, Vyacheslav," else, output "No such name."
const name = "Vyacheslav"; 
if (name === "Vyacheslav") {
  console.log("Hi, Vyacheslav");
} else {
  console.log("No such name");
}

// Task 3: There is a numeric array at the input; output the array elements that are multiples of 3.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const result = arr.filter(num => num % 3 === 0);
console.log(result);

// Task 4: 
// Последовательность квадратных скобок [((())()(()]] неверна. Каждая открывающая скобка должна иметь соответствующую закрывающую скобку. Таким образом получается правильная последовательность.
// В этой последовательности есть дополнительная закрывающая скобка - ], которой не соответствует открывающая скобка. Чтобы эта последовательность была правильной, нужно удалить лишнюю закрывающую скобку: ((())()(())).

// Bonus: Interactive value input for processing and processing data output ('readline' module for reading input from the console.)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Task 1
rl.question('Enter a number: ', (number) => {
  if (number > 7) {
    console.log("Hi");
  }
  rl.close();
});

// Task 2
rl.question('Enter a name: ', (name) => {
  if (name === "Vyacheslav") {
    console.log("Hi, Vyacheslav");
  } else {
    console.log("No such name");
  }
  rl.close();
});

// Task 3
rl.question('Enter a numeric array (e.g. 1,2,3,4,5): ', (arr) => {
  arr = arr.split(',').map(Number);
  const result = arr.filter(num => num % 3 === 0);
  console.log(result);
  rl.close();
});
