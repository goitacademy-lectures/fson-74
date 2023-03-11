/*|*****************************************
  | ********** Методи об’єкту, "this" **********
  |***************************************** */

// function makeUser() {
//   return {
//     name: "Іван",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // Яким буде результат?

// function makeUser() {
//   return {
//     name: "Іван",
//     ref() {
//       return this;
//     }
//   };
// }

// let user = makeUser();

// alert( user.ref().name ); // Яким буде результат?

/**
  |============================
  | Завдання 1

  | Розставте відсутні this в методах об'єкта account.
  |============================
*/
// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     discount = value;
//   },
//   showOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost;
//     orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

/**
  |============================
  | Завдання 2

  | Виправте помилки, які будуть в консолі, щоб скрипт запрацював.
  |============================
*/
// const inventory = {
//   items: ["Map", "Flashlight"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Compass", inventory.add);
// console.log(inventory.items);

// invokeInventoryAction("Flashlight", inventory.remove);
// console.log(inventory.items);

/**
  |============================
  | Завдання 3

  | Є об’єкт ladder, що дозволяє підійматися вгору-вниз
  | Змініть код up, down і showStep так, щоб зробити доступним ланцюг викликів
  |============================
*/
// let ladder = {
//   step: 0,
//   up() {
//     this.step += 1;
//   },
//   down() {
//     this.step -= 1;
//   },
//   showStep() {
//     console.log(this.step);
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
