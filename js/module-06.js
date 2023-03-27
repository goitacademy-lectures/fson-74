//TODO:==============================================
/*
Завдання 1
При натисканні на кнопку "SHOW ME" в консоль має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const buttonEl = document.querySelector('#alertButton');
// const inputEl = document.querySelector('#alertInput');

// buttonEl.addEventListener('click', () => console.log(inputEl.value));

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// const refs = {
//   swapButton: document.querySelector('#swapButton'),
//   leftSwapInput: document.querySelector('#leftSwapInput'),
//   rightSwapInput: document.querySelector('#rightSwapInput'),
// };
// refs.swapButton.addEventListener('click', () => {
//   const leftInput = refs.leftSwapInput.value;
//   const rightInput = refs.rightSwapInput.value;

//   if (leftInput === rightInput) {
//     console.log('Exit');
//   }

//   refs.leftSwapInput.value = rightInput;
//   refs.rightSwapInput.value = leftInput;
// });

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/
// const refs = {
//   passwordInput: document.querySelector('#passwordInput'),
//   passwordButton: document.querySelector('#passwordButton'),
// };
// refs.passwordButton.addEventListener('click', onPasswordButtonClick);

// function onPasswordButtonClick() {
//   const inputType = refs.passwordInput.getAttribute('type');

//   if (inputType === 'text') {
//     refs.passwordInput.setAttribute('type', 'password');
//     refs.passwordButton.textContent = 'Розкрити';
//   } else {
//     refs.passwordInput.setAttribute('type', 'text');
//     refs.passwordButton.textContent = 'Приховати';
//   }
// }
//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів. Використай інструкцію switch
*/

// const refs = {
//   decreaseBtn: document.querySelector('#decrease'),
//   increaseBtn: document.querySelector('#increase'),
//   box: document.querySelector('#box'),
// };

// refs.decreaseBtn.addEventListener('click', onBtnClick);
// refs.increaseBtn.addEventListener('click', onBtnClick);

// function onBtnClick(event) {
//   const boxWidth = refs.box.offsetWidth;
//   const boxHeight = refs.box.offsetHeight;
//   const btnType = event.target.getAttribute('id');

//   switch (btnType) {
//     case 'decrease':
//       refs.box.style.width = boxWidth - 10 + 'px';
//       refs.box.style.height = boxHeight - 10 + 'px';
//       break;

//     case 'increase':
//       refs.box.style.width = boxWidth + 10 + 'px';
//       refs.box.style.height = boxHeight + 10 + 'px';
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
const place = document.querySelector('#place');
// window.addEventListener('click', onPageClick);

// function onPageClick(event) {
//   const checkIdEl = event.target.getAttribute('id');
//   console.log(checkIdEl);
//   if (!checkIdEl) {
//     console.log('Клік відбувся поза зоною елемента js.');
//     return;
//   }
//   console.log('Клік відбувся всередині елемента з id "place".');
// }

window.addEventListener('click', isInPage);

function isInPage(event) {
  const body = document.body;
  const div = body.firstElementChild;

  return event.target !== div.lastElementChild
    ? console.log('Клік відбувся поза зоною елемента js.')
    : console.log('Клік відбувся всередині елемента з id "place".');
}

// function isInPage(node) {
//   return node === document.body ? false : document.body.contains(node);
// }

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При кліку на коло воно повинно слідувати за курсором.
При повторному подвійному кліку воно стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

//TODO:==============================================
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
/*
Завдання 10
Наведено список людей. Зроби можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список людей. Зроби фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/

//TODO:==============================================
/*
Завдання 14
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey
*/

//TODO:======================
// Завдання 15
// Взяти попереднє завдання з Зоопарком та вивести звірів, їх тип та особливості в DOM.
// Додати до списку клас animalList.На елемент списку animalElement

//TODO:======================
// Завдання 16
//  Створіть HTML сторінку з табличкою,
//  яка містить список продуктів.Кожен рядок у
//  табличці повинен містити назву продукту та його ціну.
//  При натисканні на будь - який рядок у табличці відобразіть
//  повідомлення з назвою продукту та його ціною.

//TODO:======================
// Завдання 17
// Створіть HTML сторінку з формою,
// яка містить поле введення для введення
// імені користувача та кнопку. При натисканні
// на кнопку відобразіть повідомлення з привітанням з іменем користувача.
