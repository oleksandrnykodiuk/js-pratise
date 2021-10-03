// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };

// Guest.prototype.showGuestInfo = function () {
//   console.log(`Hello, ${this.name}, your room is ${this.room}, have a good day!`);
// };

// const mango = new Guest('Mango', 546);
// const poly = new Guest('Poly', 477);
// const mandarin = new Guest('Mandarin', 248);
// const apelsin = new Guest('Apelsin', 6);

// mango.showGuestInfo(); // name: Mango, room: 546
// poly.showGuestInfo(); // name: Poly, room: 477
// mandarin.showGuestInfo();
// apelsin.showGuestInfo();



// -------- 

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// /*
//  * Теперь у нас есть конструктор базового класса героя,
//  * добавим в prototype какой-то метод.
//  */
// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('Mango', 1000);
// console.log(mango); // Hero { name: 'Mango', xp: 1000 }

// // Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
// mango.gainXp(5000); // Mango gained 500 experience points
// console.log(mango); // Hero { name: 'Mango', xp: 1500 }


// ---------

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(parent)

// Объяви функцию-конструктор Car которая принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Функция Car должна создавать объект с одноимёнными свойствами brand,
// model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.



// function Car(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// }

// const bmw = new Car('BMW', 'X3', 18000);
// const audi = new Car('Audi', 'A6', 15000)
// console.log('This is what we can offer: ', bmw, audi);

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


// Car.prototype.getPrice = function () {
//     return this.price;
// }

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }

// const bmw = new Car('BMW', 'X3', 18000);
// const audi = new Car('Audi', 'A6', 15000)
// bmw.changePrice(22000);
// console.log(bmw);

// ------------------------------

// function Storage(items) {
//     this.items = items;
// }

// Storage.prototype.getItems = function () {
//     return this.items;
// }

// Storage.prototype.addItem = function (newItem) {
//     return this.items.push(newItem);

// }

// Storage.prototype.removeItem = function (item) {
//     this.items.splice(this.items.indexOf(item) , 1)
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]



// ----------------------------


// function StringBuilder(baseValue) {
//     this.value = baseValue;

// }

// StringBuilder.prototype.getValue = function () {
//     return this.value;

// }


// StringBuilder.prototype.padEnd = function (str) {
//     return this.value = this.value + str;

// }

// StringBuilder.prototype.padStart = function (str) {
//     return this.value = str + this.value;

// }

// StringBuilder.prototype.padBoth = function (str) {
//     return this.value= str + this.value + str;

// }

// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// changePrice(newPrice){
//     this.price = newPrice;
// }

// console.log(changePrice);

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }


//     getItems () {
//     return this.items;
//     }
    
//     addItem(newItem) {
//         this.items.push(newItem);
//     }

//     removeItem(item) {
//         const itemIndex = this.items.indexOf(item);
//         this.items.splice(itemIndex, 1);
//     }

// }

// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice > Car.MAX_PRICE){
//     return
//     }
//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.filter(num => num > 5)); // [6, 7, 8, 9]

console.log(numbers.filter(num => num < 5)); // [0, 1, 2, 3, 4]

console.log(numbers.filter(num => num === 5)); // [5]
