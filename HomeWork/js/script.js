// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: 'Василь',
//   specialn: 'Інформатика',
//   avgMark: 4.5,
//   missedLessons: 2,
//   showInfo() {
//     console.log(
//       `Ім*я: ${this.name}, Спеціальність: ${this.specialn}, Середній бал: ${this.avgMark}, Пропущені заняття: ${this.missedLessons}`,
//     );
//   },
// };

// const student1 = {
//   name: 'Ольга',
//   specialn: 'Математика',
//   avgMark: 4.0,
//   missedLessons: 3,
// };

// const student2 = {
//   name: 'Петро',
//   specialn: 'Фізика',
//   avgMark: 4.8,
//   missedLessons: 1,
// };

// const student3 = {
//   name: 'Іван',
//   specialn: 'Хімія',
//   avgMark: 4.6,
//   missedLessons: 2,
// };

// student.showInfo.call(student1);
// student.showInfo.apply(student2);
// student.showInfo.bind(student3)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const definition = {
//   name(lang) {
//     console.log(lang, this.definit);
//   },
// };

// const html = {
//   definit: ' - це мова розмітки гіпертексту',
// };

// const css = {
//   definit: ' - це мова каскадних таблиць стилів',
// };

// document.querySelector('#html').onclick = definition.name.bind(html, 'html');
// document.querySelector('#css').onclick = definition.name.bind(css, 'css');

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function shop(product, price, quantity) {
//   let cost = Math.round(price * quantity * 100) / 100;
//   return `${product} - ${cost}`;
// }

// console.log(shop('banana', 30, 4.5));
// console.log(shop('cherry', 58, 1.3));
// console.log(shop('orange', 89, 3.4));

// const shop = {
//   product: 'banana',
//   price: 30,
//   quantity: 4.5,
//   getCost() {
//     let cost = Math.round(this.price * this.quantity * 100) / 100;
//     console.log(`${this.product} - ${cost}`);
//   },
// };

// const banana = {
//   product: 'banana',
//   price: 30,
//   quantity: 4.5,
// };

// const cherry = {
//   product: 'cherry',
//   price: 58,
//   quantity: 1.3,
// };

// const orange = {
//   product: 'orange',
//   price: 89,
//   quantity: 3.4,
// };

// shop.getCost.call(banana);
// shop.getCost.apply(orange);
// shop.getCost.bind(cherry)();
