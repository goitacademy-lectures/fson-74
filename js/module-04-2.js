import users from './db.js';
/**
  |============================
  | Завдання 1
  |============================
*/
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// const usersNames = [];
// function getUsersNames(users) {
//   users.forEach(names => usersNames.push(names.name));
// }
// getUsersNames(users);
// console.log(usersNames);
// ----------
// const usersNames = users.map(user => user.name);
// console.log(usersNames);

/**
  |============================
  | Завдання 2
  |============================
*/
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getUsersWithEyeColor(arr, color) {
//   return arr.filter(user => user.eyeColor === color);
// }
// console.log(getUsersWithEyeColor(users, 'blue'));

/**
  |============================
  | Завдання 3
  |============================
*/
// Отримати масив імен користувачів за статтю (поле gender)
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getUsersWithGender(users, gender) {
//   return users.filter(user => user.gender === gender);
// }
// console.log(getUsersWithGender(users, 'male'));

/**
  |============================
  | Завдання 4
  |============================
*/
// Отримати масив тільки неактивних користувачів (поле є активним).
// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getInactiveUsers(users) {
//   return users.filter(user => user.isActive === false);
// }
// console.log(getInactiveUsers(users));

/**
  |============================
  | Завдання 5
  |============================
*/
// Отримати користувача (не масив) по email (поле email, він унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getUserWithEmail(arr, email) {
//   return arr.find(user => user.email === email);
// }
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

/**
  |============================
  | Завдання 6
  |============================
*/
// Отримати масив користувачів віком від min до max
// console.log (getUsersWithAge(users, 20, 30));
// [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
// console.log (getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getUsersWithAge(arr, a, b) {
//   return arr.filter(user => user.age > a && user.age < b);
// }
// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

/**
  |============================
  | Завдання 7
  |============================
*/
// Отримати загальну суму балансу (поле balance) всіх користувачів.
// console.log(calculateTotalBalance(users)); // 20916
//++++++++++++++++++ Рішення ++++++++++++++++++
// function calculateTotalBalance(arr) {
//   return arr.reduce((accuum, element) => {
//     accuum += element.balance;
//     return accuum;
//   }, 0);
// }
// console.log(calculateTotalBalance(users)); // 20916

/**
  |============================
  | Завдання 8
  |============================
*/
// Отримати масив імен всіх користувачів, які мають одиного друга із зазначеним ім'ям.
// console.log(getUsersWithFriend(users, 'Briana Decker'))); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getUsersWithFriend(arr, friendName) {
//   return arr.filter(user => user.friends.includes(friendName));
// }
// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

/**
  |============================
  | Завдання 9
  |============================
*/
// Отримати масив імен (поле name) людей, відсортованих залежно від кількості їх друзів (поле friends)
// console.log(getNamesSortedByFriendCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getNamesSortedByFriendCount(arr) {
//   return arr.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
// }
// console.log(getNamesSortedByFriendCount(users));

/**
  |============================
  | Завдання 10
  |============================
*/
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// уміннь, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum',
// 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam']
//++++++++++++++++++ Рішення ++++++++++++++++++
// function getClearSkills(arr) {
//   return arr
//     .flatMap(user => user.skills)
//     .filter((element, indx, array) => array.indexOf(element) === indx)
//     .sort((a, b) => a.localeCompare(b));
// }
// console.log(getClearSkills(users));
/**
  |============================
  | Завдання 11
  |============================
*/
// Напишіть функцію compact(), яка очищає масив від небажаних значень,
// таких як false, undefined, порожні рядки, нуль, null.
const data = [0, 1, false, 2, undefined, '', 3, null];

// //++++++++++++++++++ Рішення ++++++++++++++++++

const compact = data => data.filter(elem => elem);
console.log(compact(data)); // [1, 2, 3]

// function compact(arr) {
//   console.log('??');
//   console.log('??', typeof null);
//   let tempElem = 0;
//   console.log(Boolean(''));
//   arr.filter(element => {
//     if (Boolean(element) === false) {
//       tempElem = arr.indexOf(element);
//       arr.splice(tempElem, 1);
//     }
//   });
//   return arr;
// }

/**
  |============================
  | Завдання 12
  |============================
*/
// Напишіть функцію without(), яка повертає новий масив без наданих значень. Використовуйте примітивні типи.
// const data = [1, 2, 3, 4, 1, 2];
// console.log('without(data, 1, 2)', without(data, 1, 2)); // [3, 4]
// // console.log('without(data, 2, 4)', without(data, 2, 4));
// //++++++++++++++++++ Рішення ++++++++++++++++++
// function without(arr, a, b) {
// arr =  [1, 2, 3, 4, 1, 2];
// a = 1
// b = 2

// return arr.filter((elem, indx, arr) => {
//   let tempEl = 1;
//   if (elem === a) {
//     tempEl = arr.indexOf(elem);
//     arr.splice(tempEl, 1);
//   } else return arr;
// });
// // А чому видалилась двійка? Я ж її ніде не юзав...
// // Якщо прибрати елсе, то не видаляється одиничка...

// // let indxOfA = 0;
// // let indxOfB = 0;
// const arr2 = arr
//   .filter((element, indx, array) => array.indexOf(element) === indx)
//   .filter(element => element !== a)
//   .filter(element => element !== b);
// // console.log(arr2);
// for (const element of arr2) {
//   console.log(element);
//   if (element === a) {
//     console.log('a', a);
//     indxOfA = arr2.indexOf(element);
//     console.log('indxOfA cycle1', indxOfA);
//   }
// }
// arr2.splice(indxOfA, 1);
// console.log(arr2);
// for (const element of arr2) {
//   console.log(element);
//   if (element === b) {
//     indxOfB = arr2.indexOf(element);
//     console.log('indxOfB cycle2', indxOfB);
//   }
// }

// arr2.splice(indxOfB, 1);
// return arr2;

// for (const element of arr) {
//   if (element === a) {
//     indxOfA = arr.indexOf(element);
//     arr.splice(indxOfA, 1);
//   } else {
//     if (element === b) {
//       indxOfB = arr.indexOf(element);
//       arr.splice(indxOfB, 1);
//     }
//   }
// } // Наче мав би виконатись блок після елсе, але щось пішло не так...
// return arr;
// }

/**
  |============================
  | Завдання 13
  |============================
*/
// Необхідно написати функцію isEqualSymbols(), що приймає в аргументах два рядки
// і повертає true, якщо ці рядки складаються з ідентичних літер і false в іншому випадку.
// console.log(isEqualSymbols("GOOD", "GODO")); // результат true
// console.log(isEqualSymbols("кіт", "струм")); // результат false
// console.log(isEqualSymbols("кіт", "тік")); // результат true
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 14
  |============================
*/
// Сортування примітивів.
// Виконайте сортування масиву цін за спаданням та зростанням
// const prices = [1000, 240, 670, 360, 89, 20];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 15
  |============================
*/
// Сортування рядків.
// Виконайте сортування масиву назв моніторів у алфавітному та зворотньому порядку.
// const monitors = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ", "ASER"];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 16
  |============================
*/
// Сортування складних типів
// Виконайте сортування масиву об'єктів:
// 1. За зростанням та зменшенням значення властивості price
// 2. За ім'ям в алфавітному та зворотному порядку
// const items = [
//   { name: "SAMSUNG", price: 15000 },
//   { name: "LG", price: 9000 },
//   { name: "DELL", price: 27000 },
//   { name: "BENQ", price: 12000 },
//   { name: "ASER", price: 7000 },
// ];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 17
  |============================
*/
// Зібрати в allTopics масив всіх предметів всіх курсів
// Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: ["VSCode", "NPM", "Bundlers", "Transpiling", "Git", "Promises", "AJAX", "GitHub"],
//   },
// ];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 18
  |============================
*/
// Призначити знижку 20% на фрукти в масиві,
// Присвоїти ID для кожного продукту

const fruits = [
  { name: 'apple', price: 200 },
  { name: 'orange', price: 300 },
  { name: 'grapes', price: 750 },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 19
  |============================
*/
// Повернути об'єкт у якому вказується кількість тегів
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 20
  |============================
*/
// Дізнатись суму років практики в об'єкті workers
const workers = [
  { id: 10, name: 'Mango', years: 14 },
  { id: 2, name: 'Poly', years: 19 },
  { id: 41, name: 'Ajax', years: 30 },
  { id: 99, name: 'Kiwi', years: 22 },
];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 21
  |============================
*/
// Даний масив із числами. Залишіть у ньому лише додатні числа.
// Потім порахуйте квадратний корінь цих чисел.
const array = [121, -2, 225, 0, 4, -5, 36, -11];
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 22
  |============================
*/
// Створення масиву значень Фаренгейта із масиву значень Цельсія
// Для обрахунку використайте формулу <temperature * 1.8 + 32>
const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]
//++++++++++++++++++ Рішення ++++++++++++++++++

/**
  |============================
  | Завдання 23
  |============================
*/
// Знайти унікальні елементи за допомогою reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
//++++++++++++++++++ Рішення ++++++++++++++++++
