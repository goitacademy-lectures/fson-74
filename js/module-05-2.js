/*|*****************************************
  |********** Прототипи та класи ***********
  |***************************************** */

/**
  |============================
  | Завдання 1

  | Напишіит функцію-конструктор Account, яка створює об'єкт з властивостями login та email.
  | В prototype функції-конструктора додайте метод getInfo(),
  | який виводить в консоль значення полів login і email об'єкта який його викликав.
  |============================
*/
// function Account({ login, email }) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };
//==============================================================================
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

/**
  |============================
  | Завдання 2

  | Напишіть функцію-конструктор Storage, яка при виклику отримуватиме один агрумент
  | у вигляді початкового масиву товарів і записуватиме їх у властивість items.
  | Додайте наступні методи до функції-конструктора Storage:
  | getItems() - повертає масив поточних товарів
  | addItem(item) - приймає та додає новий товар до масиву items
  | removeItem(item) - приймає товар і, якщо він є, видаляє його з масиву items
  |============================
*/
// const Storage = function (arr) {
//   this.items = arr;
// };
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (item) {
//   return this.items.push(item);
// };
// Storage.prototype.removeItem = function (item) {
//   let tempIndx = this.items.indexOf(item);
//   return this.items.splice(tempIndx, 1);
// };

// function Storage(items) {
//   this.items = items;

//   this.getItems = function () {
//     return this.items;
//   };

//   this.addItem = function (item) {
//     this.items.push(item);
//   };

//   this.removeItem = function (item) {
//     const index = this.items.indexOf(item);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   };
// }

// const storage = new Storage(["🍏", "🍌", "🥭", "🍉"]);

// const items = storage.getItems();
// console.table(items); // ["🍏", "🍌", "🥭", "🍉"]

// storage.addItem('🫐');
// console.table(storage.items); // ["🍏", "🍌", "🥭", "🍉", "🫐"]

// storage.removeItem('🥭');
// console.table(storage.items); // ["🍏", "🍌", "🫐", "🍉"]

/**
  |============================
  | Завдання 3

  | Напишіть клас Client який створює об'єкт з ​​властивостями login email
  | Оголосіть приватні властивості #login #email,
  | доступи до яких зробіть через геттер та сеттер
  |============================
*/
// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client = new Client('mango', 'mango@gmail.com');
// console.log(client.getClientData); // {login: 'mango', email: 'mango@gmail.com'}

// client.changeEmail = 'tango@gmail.com';
// console.log(client.getClientData.email); // 'tango@gmail.com'

// const anotherClient = new Client("poly", "poly@post.ua");
// console.log(anotherClient.getClientData);
/**
  |============================
  | Завдання 4

  | Напишіть клас Notes, який управляє колекцією нотаток у властивості items.
  | Нотатка - це об'єкт із властивостями text і priority.
  | Додай класу статичний метод Priopity, який буде повертати об'єкт із пріоритетами.
  | Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)
  |============================
*/

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }
  constructor() {
    this.items = [];
  }

  addNote(note) {
    return this.items.push(note);
  }

  removeNote(noteName) {
    const index = this.items.findIndex((item) => item.text === noteName);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updatePriority({ text, newPriority }) {
    const index = this.items.findIndex((item) => item.text === text);
    if (index !== -1) {
      this.items[index].priority = newPriority;
    }
  }
}

const firstNote = new Notes();

firstNote.addNote({ text: "Купити фрукти", priority: Notes.Priority().LOW });
firstNote.addNote({
  text: "Прибрати в кімнаті",
  priority: Notes.Priority().LOW,
});
console.log(firstNote.items); // [{text: 'Купити фрукти', priority: 'low'}, {text: 'Прибрати в кімнаті', priority: 'low'}]

firstNote.updatePriority({
  text: "Купити фрукти",
  newPriority: Notes.Priority().HIGHT,
});
console.log(firstNote.items); // [{text: 'Купити фрукти', priority: 'hight'}, {text: 'Прибрати в кімнаті', priority: 'low'}]

firstNote.removeNote("Прибрати в кімнаті");
console.log(firstNote.items); //[{text: 'Купити фрукти', priority: 'hight'}]
/**
  |============================
  | Завдання 5

  | Напишіть клас Car із зазначеними властивостями і методами.
  |============================
*/
class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(car) {
    console.log(car.speed, car.price, car.maxSpeed, car.isOn, car.distance);
  }

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true;
    console.log(this.isOn);
  }
  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed += this.maxSpeed - this.speed;
    }
  }
  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed -= this.speed; // this.speed = 0;
    }
  }
  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hour) {
    if (this.isOn) {
      this.distance = hour * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.accelerate(50);
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.decelerate(20);
mustang.decelerate(20);

mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
