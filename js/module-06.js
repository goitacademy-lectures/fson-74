//TODO:==============================================
/*
Завдання 1
При натисканні на кнопку "SHOW ME" в консоль має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const alertBtnEl = document.querySelector('#alertButton');
// const alertInputEl = document.querySelector('#alertInput');
// alertBtnEl.addEventListener('click', showAlert);
// function showAlert() {
//   console.log(alertInputEl.value);
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const refs = {
//   swapButtonEl: document.querySelector('#swapButton'),
//   leftSwapInputEl: document.querySelector('#leftSwapInput'),
//   rightSwapInputEl: document.querySelector('#rightSwapInput'),
// };
// refs.swapButtonEl.addEventListener('click', swapInp);
// function swapInp() {
//   let swapOne = refs.leftSwapInputEl.value;
//   let swapTwo = refs.rightSwapInputEl.value;
//   refs.leftSwapInputEl.value = swapTwo;
//   refs.rightSwapInputEl.value = swapOne;
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const refs = {
//   passInpEl: document.querySelector('#passwordInput'),
//   hideBtnEl: document.querySelector('#passwordButton'),
// };
// refs.hideBtnEl.addEventListener('click', hidePass);
// function hidePass() {
//   // 3 short variant
//   const type = refs.passInpEl.getAttribute('type') === 'password' ? 'text' : 'password';
//   refs.passInpEl.setAttribute('type', type);
//   refs.hideBtnEl.textContent = type === 'password' ? 'Розкрити' : 'Показати';
// 2 variant
// const type = refs.passInpEl.getAttribute('type');
// const whatAType = type === 'password' ? 'text' : 'password';
// refs.passInpEl.setAttribute('type', whatAType);
// const nameBtn = whatAType === 'password' ? 'Розкрити' : 'Показати';
// refs.hideBtnEl.textContent = nameBtn;

// 1 variant
// if (type === 'password') {
//   refs.passInpEl.setAttribute('type', 'text');
//   refs.hideBtnEl.textContent = 'Приховати';
// } else {
//   refs.passInpEl.setAttribute('type', 'password');
//   refs.hideBtnEl.textContent = 'Розкрити';
// }
// }
// function hidePass() {
//   refs.passInpEl.setAttribute('type', 'password');
//   refs.hideBtnEl.textContent = 'Розкрити';
//   refs.hideBtnEl.removeEventListener('click', hidePass);
//   refs.hideBtnEl.addEventListener('click', showPass);
// }
// function showPass() {
//   refs.passInpEl.setAttribute('type', 'text');
//   refs.hideBtnEl.textContent = 'Приховати';
//   refs.hideBtnEl.removeEventListener('click', showPass);
//   refs.hideBtnEl.addEventListener('click', hidePass);
// }

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів. Використай інструкцію switch
*/

// const refs = {
//   // divEl: document.querySelector('div'),
//   incrEl: document.querySelector('#increase'),
//   decrEl: document.querySelector('#decrease'),
//   boxEl: document.querySelector('#box'),
// };
// // refs.divEl.addEventListener('click', doSomething);
// refs.incrEl.addEventListener('click', doSomething);
// refs.decrEl.addEventListener('click', doSomething);
// function doSomething(event) {
//   const origWidth = refs.boxEl.offsetWidth;
//   const origHeight = refs.boxEl.offsetHeight;
//   switch (event.target.getAttribute('id')) {
//     case 'increase':
//       refs.boxEl.style.width = origWidth + 10 + 'px';
//       refs.boxEl.style.height = origHeight + 10 + 'px';
//       break;
//     case 'decrease':
//       refs.boxEl.style.width = origWidth - 10 + 'px';
//       refs.boxEl.style.height = origHeight - 10 + 'px';
//       break;
//   }
// }

//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку до сторінки і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
В консоль виводь наступну повідомлення:
1. 'Клік відбувся всередині елемента з id "place".'
2. "Клік відбувся поза зоною елемента js."
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

// <div>
//   <p class="taskTitle">ЗАДАЧА 5</p>
//   <div id="place"></div>
// </div>;
// const placeEl = document.querySelector('#place');
// document.addEventListener('click', findWhere);
// function findWhere(ev) {
//   const node = ev.target;
//   console.log(node);
//   if (placeEl.contains(ev.target)) {
//     console.log('Клік відбувся всередині елемента з id "place".');
//   } else {
//     console.log('Клік відбувся поза зоною елемента js.');
//   }
//   // const node = ev.target.id;
//   // if (node === placeEl.id) {
//   //   console.log('Клік відбувся всередині елемента з id "place".');
//   // } else {
//   //   console.log('Клік відбувся поза зоною елемента js.');
//   // }
//   // }
// }

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

// const doubleBtnEl = document.querySelector('#double');
// doubleBtnEl.addEventListener('click', doubleFn);
// const liEl = document.querySelectorAll('.listItem');
// function doubleFn() {
//   const temp = [];
//   liEl.forEach(element => temp.push((element.textContent *= 2)));
//   console.log(temp);
// }

//TODO:==============================================
/*
Завдання 7
При кліку на коло воно повинно слідувати за курсором.
При повторному подвійному кліку воно стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// const outerEl = document.querySelector('.outerCircle');
// const innerEl = document.querySelector('.innerCircle');
// const mouseEv = new MouseEvent('mousemove');
// // const { x: elemX, y: elemY } = outerEl.getBoundingClientRect();
// // console.log(outerEl.getBoundingClientRect());
// function getPosMouse(event) {
//   outerEl.style.left = `${event.pageX - 20}px`;
//   outerEl.style.top = `${event.pageY - 20}px`;
// }

// outerEl.addEventListener('click', someFn);
// function someFn(event) {
//   outerEl.style.position = 'absolute';
//   window.addEventListener('mousemove', getPosMouse);
// }

// outerEl.addEventListener('dblclick', returnPos);

// function returnPos(event) {
//   outerEl.style.position = 'static';
//   window.removeEventListener('mousemove', getPosMouse);
//   //   outerEl.style.left = elemX;
//   //   outerEl.style.top = elemY;
// }

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

// const refsStatList = {
//   statDivEl: document.querySelector('.statList'),
//   btnArrEl: document.querySelectorAll('.calcButton'),
//   resultBtnEl: document.querySelector('#resultButton'),
//   resultSectionEl: document.querySelector('#resultSection'),
//   countBtnClick: 0,
//   result: 0,
// };

// refsStatList.statDivEl.addEventListener('click', summDataSet);
// function summDataSet(event) {
//   if (event.target.classList.contains('calcButton')) {
//     refsStatList.countBtnClick += 1;
//     refsStatList.btnArrEl.forEach(el => (refsStatList.result += Number(el.dataset.number)));
//   }
// }
// refsStatList.resultBtnEl.addEventListener('click', showResult);
// function showResult() {
//   refsStatList.resultSectionEl.textContent = `Summ of data = ${refsStatList.result}. Statistic of press button: ${refsStatList.countBtnClick}`;
// }

//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

// const filterBtnEl = document.querySelector('.checkboxForm button');
// const checkBoxById = document.querySelectorAll('.checkboxList input');
// filterBtnEl.addEventListener('click', deleteChecked);
// function deleteChecked(ev) {
//   ev.preventDefault();
//   checkBoxById.forEach(el => {
//     if (el.checked) {
//       el.parentNode.remove();
//     }
//   });
// }

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/
// const refs = {
//   liPersonEl: document.querySelectorAll('.person'),
//   ulPeopleEl: document.querySelector('.people'),
//   tempArray: [],
//   firstNameBtn: document.getElementById('sortByNameButton'),
//   lastNameBtn: document.getElementById('sortByLastNameButton'),
//   firstName: [],
//   lastName: [],
// };

// refs.firstNameBtn.addEventListener('click', beforeSortFirstName);
// function beforeSortFirstName() {
//   if (refs.tempArray.length === 0) {
//     refs.liPersonEl.forEach(element => {
//       refs.tempArray.push(element.textContent);
//     });
//   }
//   const sortedByFirstName = [...refs.tempArray].sort((a, b) => a.localeCompare(b));
//   renderSortList(sortedByFirstName);
// }
// function renderSortList(array) {
//   const markup = array
//     .map(element => {
//       return `<li class='person'>${element}</li>`;
//     })
//     .join('');
//   refs.ulPeopleEl.innerHTML = markup;
// }

// refs.lastNameBtn.addEventListener('click', beforeSortLastName);

// function beforeSortLastName() {
//   if (refs.firstName.length === 0 && refs.lastName.length === 0) {
//     createFirstAndLastNameArrays();
//   }
//   const arrReverseNames = [];
//   for (let i = 0; i < refs.lastName.length; i += 1) {
//     arrReverseNames.push(refs.lastName[i] + ' ' + refs.firstName[i]);
//   }

//   const sortedByLast = [...arrReverseNames].sort((a, b) => a.localeCompare(b));

//   const resultArray = [];
//   sortedByLast.map(element => {
//     const indx = element.indexOf(' ');
//     const firstName = element.slice(indx + 1, element.length);
//     const lastName = element.slice(0, indx);
//     resultArray.push(firstName + ' ' + lastName);
//   });

//   renderSortList(resultArray);
// }

// function createFirstAndLastNameArrays() {
//   refs.liPersonEl.forEach(element => {
//     const indx = element.textContent.indexOf(' ');
//     const firstName = element.textContent.slice(0, indx);
//     const lastName = element.textContent.slice(indx + 1, element.textContent.length);
//     refs.firstName.push(firstName);
//     refs.lastName.push(lastName);
//   });
// }

//TODO:==============================================
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

// const refs = {
//   inputEl: document.querySelector('.contactsFilter'),
//   ulEl: document.querySelector('.contacts'),
//   liElAll: document.querySelectorAll('.contact'),
// };

// refs.inputEl.addEventListener('input', findNameLastName);
// function findNameLastName(event) {
//   const whatToFind = event.currentTarget.value.trim();
//   const tempArr = [];
//   refs.liElAll.forEach(element => {
//     if (element.textContent.toLowerCase().includes(whatToFind)) {
//       tempArr.push(element.textContent);
//     }
//   });
//   renderList(tempArr);
// }

// function renderList(item) {
//   const markup = item
//     .map(el => {
//       return `<li class='contact'>${el}</li>`;
//     })
//     .join('');
//   refs.ulEl.innerHTML = markup;
// }

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/
// const fromEl = document.getElementById('from');
// const toEl = document.getElementById('to');
// const replaceEl = document.getElementById('replaceButton');
// const pEl = document.querySelector('.text');

// replaceEl.addEventListener('click', replaceLetter);

// function replaceLetter() {
//   if (fromEl.value === '' || toEl.value === '') {
//     alert('Please enter letter');
//     return;
//   }
//   pEl.textContent = pEl.textContent.replaceAll(fromEl.value, toEl.value);
// }

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/
// const gridEl = document.querySelector('.grid');
// const gridItemAll = document.querySelectorAll('.gridItem');
// gridItemAll.forEach(el => {
//   console.log(el);
//   el.addEventListener('mouseover', hideCircle);
//   el.addEventListener('mouseout', showCircle);
// });
// function hideCircle(event) {
//   event.currentTarget.style.opacity = 0;
// }
// function showCircle(event) {
//   event.currentTarget.style.opacity = 1;
// }

//TODO:==============================================
/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey
*/

// const divThumbEl = document.querySelector('.eventThumb');
// window.addEventListener('keypress', collectKeys);
// const ulEl = document.createElement('ul');
// ulEl.classList.add('eventList');
// function collectKeys(event) {
//   const key = event.key;
//   const code = event.code;
//   const markupLi = createMarkup(key, code);
//   renderMarkup(markupLi);
// }
// function createMarkup(key, code) {
//   const markup = `<li><span class="eventKey">Event.key = ${key},</span> <span class="eventCode">event.code = ${code}</span></li>`;
//   return markup;
// }
// function renderMarkup(markupLi) {
//   ulEl.insertAdjacentHTML('beforeend', markupLi);
//   divThumbEl.classList.add('eventThumb');
//   divThumbEl.appendChild(ulEl);
// }

//TODO:======================
// Завдання 15
// Взяти попереднє завдання з Зоопарком та вивести звірів, їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement

// Щось я не знайшов завдання з Зоопарком?..

//TODO:======================
// Завдання 16
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

// const tableEl = document.getElementById('productTable');
// const detailsEl = document.getElementById('productDetails');
// tableEl.addEventListener('click', showColumns);
// function showColumns(event) {
//   const content = event.target.parentElement.textContent;
//   renderDetails(content);
// }
// function renderDetails(item) {
//   detailsEl.innerHTML = item;
// }
//TODO:======================
// Завдання 17
// Створіть HTML сторінку з формою,
// яка містить поле введення для введення
// імені користувача та кнопку. При натисканні
// на кнопку відобразіть повідомлення з привітанням з іменем користувача.
const formEl = document.querySelector('form');
const inputUser = document.getElementById('username');
const greetBtn = document.getElementById('greetingButton');
const greetMess = document.getElementById('greetingMessage');
greetBtn.addEventListener('click', greet);
formEl.addEventListener('submit', disSub);
function greet(event) {
  greetMess.innerHTML = `${inputUser.value.trim()} greeting to you`;
}
function disSub(event) {
  event.preventDefault();
}
