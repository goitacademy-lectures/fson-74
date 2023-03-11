'use strict';

//TODO:==============================
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"

// const res = prompt('Input your name');
// const str = ['Peter', 'John', 'Igor', 'Sasha'];
// function checkName(res, str) {
//   if (str.includes(res)) {
//     console.log('Доступ дозволено');
//   }
//   return 'There is no such user!';
// }
// checkName(res, str);

// TODO:==============================
// Напишіть функцію min(a,b), яка повертає менше із чисел a і b.
// function min(a, b) {

//   if (a < b) {
//     return a;
//   }
//   return b;
// }
// console.log(min(4, 9));

// TODO:==============================
// // Що виведе наступний код?
// let fruits = ['Яблука', 'Груша', 'Апельсин'];
// // Додаємо нове значення в "копію"
// let shoppingCart = fruits;
// shoppingCart.push('Банан');
// // що у fruits?
// console.log(fruits.length);

// Довжина масиву, 4 елементи

// TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте «Рок-н-рол» в кінець.
// Замініть значення «Блюз» на «Класика».
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ['jazz', 'blues'];
// console.log(styles);
// styles.push('rock-n-roll');
// console.log(styles);
// console.log(styles.indexOf('blues'));
// styles.splice(1, 1, 'classic');
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift('rap', 'reggie');
// console.log(styles);

// TODO:==========================
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (a === Number(a) && b === Number(b)) {
//     if (a < b) {
//       return a;
//     } else return b;
//   }
//   return `${a} or ${b} not a Number!`;
// }
// console.log(min(3, 9));

// TODO:==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// function pow(x, n) {
//   let total = 1;
//   for (let i = 0; i < n; i += 1) {
//     total *= x;
//   }
//   return total;
// }
// console.log(pow(2, 8));

// TODO:==============================
// Напишіть функцію яка сумуватиме сусідні числа і пушитиме їх в новий масив
// ---------- Тут я зробив з перевіркою на число, елементу масиву
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function summ(arr) {
//   let total = 0;
//   const tempArr = [];
//   console.log('typeof', typeof arr[7]);
//   for (let i = 0; i < arr.length; i += 1) {
//     if (typeof arr[i + 1] === 'number') {
//       total = arr[i] + arr[i + 1];
//       tempArr.push(total);
//     }
//   }
//   return tempArr;
// }
// ---------- А тут перший варіант, який може запушити НаН
// for (const num of arr) {
//   total = arr[numOne] + arr[numTwo];
//   tempArr.push(total);
//   numOne += 1;
//   console.log('numOne+1', numOne);
//   numTwo += 1;
//   console.log('numTwo+1', numTwo);
// }
// console.log(summ(someArr));

// TODO:==========================
// Напишіть функцію logItems(array), яка приймає
// масив та використовує цикл for, який для кожного
// елемента масиву виводитиме повідомлення у форматі
// <номер елемента> - <значення елемента>
// Нумерація елементів має починатися з першого.

// ---------- Написав рішення, яке перебирає звичайний масив. Масив об'єктів був в дужках -
// ---------- [({})] і от тут я не зрозумів, то так треба, щоб він був в дужках, чи то помилка в
// ---------- завданні?
// const styles = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп'];
// const arr = [
//   ({ name: 'Джаз', engl: 'jazz', number: 1 },
//   { name: 'Блюз', engl: 'blues', number: 2 },
//   { name: 'Рок-н-рол', engl: "rock 'n' roll", number: 3 },
//   { name: 'Реггі', engl: 'reggae', number: 4 },
//   { name: 'Реп', engl: 'rap', number: 5 }),
// ];
// function logItems(array) {
//   let pos = 0;
//   for (const element of array) {
//     console.log(`${pos + 1} - ${element}`);
//     pos += 1;
//   }
// }
// logItems(styles);
// logItems(arr);

// TODO:==========================
// Напиши функцію findSmallerNumber(numbers)
// яка шукає найменше число в масиві.
// Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     // console.log(Array.isArray(numbers));
//     // console.log(`${numbers} are not array!`);
//     return `${numbers} are not array!`;
//   }
//   let small = numbers[0];

//   for (const number of numbers) {
//     if (number < small) {
//       small = number;
//       console.log(small);
//     }
//   }
//   return small;
// }
// console.log(findSmallerNumber(numbers));
// const a = 2;
// findSmallerNumber(a);
// ---------- Щось не з консоль.логом в циклі фор, і ретьорном у ІФ?

// TODO:==============================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

// formatMessage("Curabitur ligula sapien", 16); //Повертає 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //Повертає 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //Повертає 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

// function formatMessage(message, maxLength) {
//   console.log(message.slice(0, maxLength));
// }

// TODO:==========================
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   const args = arguments;
//   let sum = 0;
//   let totalCount = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     sum += arg;
//     totalCount += 1;
//   }
//   return sum / totalCount;
// }

// TODO:==========================
// Напиши функцію findLongestWord(string)
// яка приймає довільний рядок
// що складається лише з розділених слів
// пробілом (параметр string)
// і повертає найдовше слово у цьому рядку
// function findLongestWord(string) {
//   let tempArr = string.split(' ');
//   let longestWord = tempArr[0].length;

//   for (const word of tempArr) {
//     if (word.length > longestWord) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }
// console.log(findLongestWord('This is my test sentence'));

// TODO:==========================
// Напишіть функції для роботи з масивом
// add(name) додає курс до кінця колекції
// removeCourse(name) видаляє курс із колекції
// updateCourse(oldName, newName) змінює ім'я на нове
// const arrayCourse = [];
// function add(name) {
//   arrayCourse.push(name);
//   console.log(arrayCourse);
//   return arrayCourse;
// }
// function removeCourse(name) {
//   const indxName = arrayCourse.indexOf(name);
//   arrayCourse.splice(indxName, 1);
//   console.log(arrayCourse);
// }
// function updateCourse(oldName, newName) {
//   const indxOldName = arrayCourse.indexOf(oldName);
//   arrayCourse.splice(indxOldName, 1, newName);
//   console.log(arrayCourse);
// }
// add('name1');
// add('name2');
// add('name3');
// removeCourse('name3');
// updateCourse('name1', 'newName1');

// TODO:==========================
// Напишіть код для пошуку пароля в масиві
// Через include і тернарний оператор
// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';
// function findPass(pass) {
//   console.log(password.includes(pass) ? `${pass} founded!` : `${pass} not found!`);
// }
// findPass(password);
// findPass('sdlk');

// TODO:==========================
// Напишіть скрипт, який замінює регістр кожного символу
// у рядку на протилежний
// Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'
// function changeCase(stringToChange) {
//   const letters = stringToChange.split('');
//   let invertedString = '';
//   for (const letter of letters) {
//     //   if (letter === letter.toLowerCase()) {
//     //     letter.toUpperCase();
//     //     invertedString += letter.toUpperCase();
//     //   } else {
//     //     invertedString += letter.toLowerCase();
//     //   }
//     invertedString += letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
//   }
//   console.log(invertedString);

//   return invertedString;
// }
// changeCase('JavaScript');

// TODO:=======================/=====
// Напишіть функцію unique(arr), яка повертає масив, який
// містить лише унікальні елементи arr.
// const words = [
//   'HTML',
//   'CSS',
//   'JS',
//   'React',
//   'JS',
//   'CSS',
//   'JS',
//   'Node.js',
//   'JS',
//   'React',
//   'CSS',
//   'React',
//   'HTML',
//   'Node.js',
// ];
// function unique(arr) {
//   return arr.filter((element, indx, array) => array.indexOf(element) === indx);
// }
// console.log(unique(words));

// TODO:==============================
// Привести масив до одного рівня
// const arr = [23, 11, ['hello', 'world', 'Vasya']];
// function returnArr(arr) {
//   let arrOne = arr.flatMap(elem => elem);
//   return arrOne;
// }
// console.log(returnArr(arr));

// TODO:==============================
//  * Працюємо з колекцією товарів у кошику:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//   { name: '🍎', price: 50 }
//   { name: '🍇', price: 70 }
//   { name: '🍋', price: 60 }
//   { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const innerProduct = {
      ...product,
      quantity: 1,
    };
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    this.items.push(innerProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    const { items } = this;

    for (const item of items) {
      if (item.name === productName && item.quantity !== 0) {
        item.quantity -= 1;
        return;
      }
    }
    console.log(`Sorry, ${productName} is out`);
  },
};
