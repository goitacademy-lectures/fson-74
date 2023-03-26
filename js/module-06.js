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

// <div>
//   <p class="taskTitle">ЗАДАЧА 4</p>
//   <button id="decrease">Зменшити</button>
//   <button id="increase">Збільшити</button>
//   <div id="box"></div>
// </div>;

const refs = {
  divEl: document.querySelector('div'),
  incrEl: document.querySelector('#increase'),
  decrEl: document.querySelector('#decrease'),
  boxEl: document.querySelector('#box'),
};
refs.divEl.addEventListener('click', doSomething);
function doSomething(event) {
  const origWidth = refs.boxEl.offsetWidth;
  const origHeight = refs.boxEl.offsetHeight;
  switch (event.target.getAttribute('id')) {
    case 'increase':
      refs.boxEl.style.width = origWidth + 10 + 'px';
      refs.boxEl.style.height = origHeight + 10 + 'px';
      break;
    case 'decrease':
      refs.boxEl.style.width = origWidth - 10 + 'px';
      refs.boxEl.style.height = origHeight - 10 + 'px';
      break;
  }
}
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
