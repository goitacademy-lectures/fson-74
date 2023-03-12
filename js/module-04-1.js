/**
  |============================
  | Завдання 1
  |============================
*/
// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача через prompt
// та викликає callback-функцію greet(name)
// greet(name) - callback-функція, що приймає ім'я і виводить в консоль
// рядок "Привіт <name>"
// Реалізуте перевірку, що у prompt() введено значення, в інакшому випадку
// виведіть в консоль повідомлення "Ви не ввели імʼя"
//++++++++++++++++++ Рішення ++++++++++++++++++

// const letMeSeeYourName = function (callback) {
//   const yourName = prompt("Введіть ваше ім'я");

//   if (!yourName) {
//     return "Ви не ввели імʼя";
//   }

//   return callback(yourName);
// };

// const greet = function (name) {
//   return `Привіт ${name}`;
// };

// console.log(letMeSeeYourName(greet));

/**
  |============================
  | Завдання 2
  |============================
*/
// Напишіть дві функції:
// 1. makeProduct(name, price, callback), яка приймає
// ім'я, ціну товару, а також callback-функцію.
// Функція makeProduct() створює об'єкт товару <product>, додаючи йому унікальний
// ідентифікатор, ключ з імʼям <id> (для цього використайте виклик new Date().getTime())
// і викликає callback-функцію, передаючи їй створений об'єкт
// 2. showProduct(product) - коллбек, який приймає об'єкт
// продукту і виводить інформацію у консоль
//++++++++++++++++++ Рішення ++++++++++++++++++++++++

// makeProduct("Fish", 350, showProduct);

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: new Date().getTime(),
//   };

//   return callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Fish", 350, showProduct);

/**
  |============================
  | Завдання 3
  |============================
*/
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
// console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie');
// makeDish('Poly', 'muffins');
//++++++++++++++++++ Рішення ++++++++++++++++++

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }
// const mango = makeShef('Mango');

// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

/**
  |============================
  | Завдання 4
  |============================
*/
// Напишіть функцію each(array, callback)
// Функція першим параметром приймає масив довільних чисел,
// а другим - callback-функцію, яка застосовується до кожного елементу масиву.
// Функція each() повинна повернути новий масив, елементами
// якого будуть результати виклику callback-функції
// callback-функція повинна множити елементи на 2
// Реалізуйте callback-функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення ++++++++++++++++++

// function each(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(callback(array[i]));
//   }
//   return result;
// }

// function multiply(value) {
//   return value * 2;
// }
// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// console.log(each(array, multiply));
//==========================================arrow function==========================
// function each(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(callback(array[i]));
//   }
//   return result;
// }

// function each(array, callback) {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     result.push(callback(array[i]));
//   }
//   return result;
// }

// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// console.log(each(array, value => value * 2));

/**
  |============================
  | Завдання 5
  |============================
*/
// Напишіть функцію makeCounter(), яка повертає іншу функцію,
// яка підраховує та логує кількість своїх викликів
// Реалізуйте внутрішню функцію двома способами:
//  - за допомогою function declaration
//  - за допомогою arrow function
//++++++++++++++++++ Рішення ++++++++++++++++++

// ---------- Function declaration
// let logMyCall = 0;
// function makeCounter() {
//   function logCall() {
//     logMyCall += 1;
//     console.log(logMyCall);
//     return logMyCall;
//   }
//   return logCall();
// }
// makeCounter();
// makeCounter();
// makeCounter();
// console.log(makeCounter());

// ----------Arrow Fn
// let logMyCall = 0;
// function makeCounter() {
//   const arrFn = () => {
//     logMyCall += 1;
//     return logMyCall;
//   };
//   return arrFn();
// }
// makeCounter();
// makeCounter();
// makeCounter();
// console.log(makeCounter());
/**
  |============================
  | Завдання 6
  |============================
*/
// Напишіть функцію savePassword(password), яка приймає значення паролю,
// який потрібно зберегти і повертає внутрішню функцію checkPassword(),
// що приймає рядок з паролем на перевірку і повертає відповідь у вигляді рядка
// "Збережений пароль: qwerty збігається з введеним паролем qwerty",
// якщо рядок збігається зі збереженим паролем або якщо не збігається
// "Збережений пароль: qwerty не збігається з введеним паролем asdfgh",
//++++++++++++++++++ Рішення ++++++++++++++++++

// function savePassword(pass) {
//   return function (pass) {
//     if (pass === 'qwerty') {
//       return `Збережений пароль: qwerty збігається з введеним паролем ${pass}`;
//     }
//     return `Збережений пароль: qwerty не збігається з введеним паролем ${pass}`;
//   };
// }
// const enteredPassword = savePassword('qwerty');
// console.log(enteredPassword('qwerty'));
// console.log(enteredPassword('asdfgh'));

/**
  |============================
  | Завдання 7
  |============================
*/
// Напишіть функцію для зберігання знижки saveDiscount().
// Функція saveDiscount() повертає внутрішню функцію makeDiscount(),
// яка приймає суму покупки і повертає фінальну суму
// зi збереженою знижкою.
// Проведіть рефакторинг функції saveDiscount(), використовуючи
// стрілочні callback-функції
//++++++++++++++++++ Рішення ++++++++++++++++++
// --------- Arrow Fn

// const saveDiscount = saveParam => {
//   const makeDiscount = summ => {
//     let finSumm = 0;
//     console.log(summ);
//     console.log(saveParam);
//     return (finSumm = summ - saveParam);
//   };
//   return makeDiscount;
// };
// const discountPremium = saveDiscount(50);
// console.log(discountPremium(1000));
// // --------- function declaration
// const discountPremium = saveDiscount(50);
// console.log(discountPremium(1000));

// function saveDiscount(saveParam) {
//   return function makeDiscount(summ) {
//     let finSumm = 0;
//     console.log(summ);
//     console.log(saveParam);
//     return (finSumm = summ - saveParam);
//   };
// }
