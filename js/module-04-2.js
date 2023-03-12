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
// const data = [0, 1, false, 2, undefined, '', 3, null];

// //++++++++++++++++++ Рішення ++++++++++++++++++

// const compact = data => data.filter(elem => elem);
// console.log(compact(data)); // [1, 2, 3]

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
//   return arr
//     .filter((element, indx, array) => array.indexOf(element) === indx)
//     .filter(element => element !== a)
//     .filter(element => element !== b);
// }

/**
  |============================
  | Завдання 13
  |============================
*/
// // Необхідно написати функцію isEqualSymbols(), що приймає в аргументах два рядки
// // і повертає true, якщо ці рядки складаються з ідентичних літер і false в іншому випадку.
// console.log('1. GOOD & GODO', isEqualSymbols('GOOD', 'GODO')); // результат true
// console.log('2. кіт & струм', isEqualSymbols('кіт', 'струм')); // результат false
// console.log('3. кіт & тік', isEqualSymbols('кіт', 'тік')); // результат true
// console.log('4. сок & супер', isEqualSymbols('сок', 'супер')); // результат false
// //++++++++++++++++++ Рішення ++++++++++++++++++
// function isEqualSymbols(str1, str2) {
//   const arrOne = str1.split('');
//   const arrTwo = str2.split('');
//   let a = 0;
//   let b = 0;
//   if (arrOne.length < arrTwo.length) {
//     console.log('arrOne.length < arrTwo.length');
//     for (let i = 0; i < arrTwo.length; i += 1) {
//       if (arrTwo.includes(arrOne[i])) {
//         a += 1;
//       } else {
//         b += 1;
//       }
//     }
//   } else {
//     arrTwo.length < arrOne.length;
//     console.log('arrTwo.length < arrOne.length');
//     for (let i = 0; i < arrOne.length; i += 1) {
//       if (arrOne.includes(arrTwo[i])) {
//         a += 1;
//       } else {
//         b += 1;
//       }
//     }
//   }
//   if (a > b) {
//     return true;
//   }
//   return false;
// }

/**
  |============================
  | Завдання 14
  |============================
*/
// Сортування примітивів.
// Виконайте сортування масиву цін за спаданням та зростанням
// const prices = [1000, 240, 670, 360, 89, 20];
//++++++++++++++++++ Рішення ++++++++++++++++++
// console.log(prices.sort((a, b) => a - b));
// console.log(prices.sort((a, b) => b - a));

/**
  |============================
  | Завдання 15
  |============================
*/
// Сортування рядків.
// Виконайте сортування масиву назв моніторів у алфавітному та зворотньому порядку.
// const monitors = ['SAMSUNG', 'LG', 'ASUS', 'DELL', 'BENQ', 'ASER'];
//++++++++++++++++++ Рішення ++++++++++++++++++
// console.log(monitors.sort((a, b) => a.localeCompare(b)));
// console.log(monitors.sort((a, b) => b.localeCompare(a)));

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
//   { name: 'SAMSUNG', price: 15000 },
//   { name: 'LG', price: 9000 },
//   { name: 'DELL', price: 27000 },
//   { name: 'BENQ', price: 12000 },
//   { name: 'ASER', price: 7000 },
// ];
// //++++++++++++++++++ Рішення ++++++++++++++++++

// const ascending = [...items].sort((a, b) => a.price - b.price);
// console.log(ascending);
// console.log(items.sort((a, b) => a.price - b.price));
// const descending = [...items].sort((a, b) => b.price - a.price);
// console.log(descending);
// console.log(items.sort((a, b) => b.price - a.price));
// console.log(items.sort((a, b) => a.name.localeCompare(b.name)));
// console.log(items.sort((a, b) => b.name.localeCompare(a.name)));

/**
  |============================
  | Завдання 17
  |============================
*/
// Зібрати в allTopics масив всіх предметів всіх курсів
// Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи
// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
//   },
// ];
// //++++++++++++++++++ Рішення ++++++++++++++++++
// const allTopics = courses.flatMap(element => element.topics);
// console.log(allTopics);
// const uniqueTopics = allTopics.filter((element, indx, arr) => arr.indexOf(element) === indx);
// console.log(uniqueTopics);

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
// function discount(arr, value) {
//   arr.forEach(element => (element.price = element.price * ((100 - value) / 100)));
// }
// discount(fruits, 20);
// function addId() {
//   fruits.forEach(element => (element.id = Math.round(Math.random() * 100)));
// }
// addId();
// console.log(fruits);

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
// const summOfYears = workers.reduce((acuum, element) => {
//   acuum += element.years;
//   return acuum;
// }, 0);
// console.log(summOfYears);

/**
  |============================
  | Завдання 21
  |============================
*/
// Даний масив із числами. Залишіть у ньому лише додатні числа.
// Потім порахуйте квадратний корінь цих чисел.
const array = [121, -2, 225, 0, 4, -5, 36, -11];
//++++++++++++++++++ Рішення ++++++++++++++++++
// array.forEach(elem => {
//   let temp = 0;
//   if (elem < 0) {
//     temp = array.indexOf(elem);
//     array.splice(temp, 1);

//   }
// });
// console.log(array);

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
// const fahrenheit = celsius.map(element => element * 1.8 + 32);
// console.log(fahrenheit);

/**
  |============================
  | Завдання 23
  |============================
*/
// Знайти унікальні елементи за допомогою reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
//++++++++++++++++++ Рішення ++++++++++++++++++
// const uniqueEl = numbers.reduce((acuum, element, index, array) => {
//   if (array.indexOf(element) === index) {
//     console.log('element', element);
//     console.log('index:', index);
//     acuum.push(element);
//   }
//   return acuum;
// }, []);
// console.log(numbers);
// console.log(uniqueEl);
