// console.log("Hello, Node.js!");
// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const fn = outer();
// fn(); // 1
// fn(); // 2
// fn(); // 3

// function createBankAccount() {
//   let balance = 0;

//   return {
//     deposit(amount) {
//       balance += amount;
//     },
//     getBalance() {
//       return balance;
//     }
//   };
// }

// let bank1=createBankAccount();
// let bank2 = createBankAccount(); 
// bank1.deposit(200);
// bank2.deposit(600);
// bank1.deposit(43);
// console.log(bank1.getBalance())

