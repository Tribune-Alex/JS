// 1. Inheritance

// function Vehicle(brand,speed){
//     this.brand=brand;
//     this.speed=speed;   
// };


// Vehicle.prototype.accelerate=function(){
//     return `${this.speed+10}`
// };

// class Car extends Vehicle{
//     honk(){
//         return `${this.brand} honks`;
//     }
// };

// const car1=new Car("BMW M5",250);
// console.log(car1.accelerate());
// console.log(car1.honk());

// -----------------------------------------------------

// 2.Encapsulation

// class BankAccount {
//     #balance = 150;

//     constructor(name) {
//         this.name = name;
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.#balance += amount;
//         }
//     }

//     withdraw(cash) {
//         if (this.#balance - cash >= 0) {
//             this.#balance -= cash;
//         }else{
//             console.log("You dont have enough money");
//         }
//     }

//     getbalance() {
//         return `Your balance is ${this.#balance}`;
//     }




// };

// const user = new BankAccount("Alex");
// user.deposit(850);
// user.withdraw(450);
// console.log(user.getbalance());

// ----------------------------------------------------------------

// 3.Polymorphism

// class Circle {
//     constructor(width) {
//         this.width = width;
//     }

//     area() {
//         return Math.PI * (this.width ** 2);
//     }
// };

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }
// };

// const circl = new Circle(20);
// const rect = new Rectangle(20, 5);

// function getarea(width, height) {
//     return `S of Circle is ${Math.round(circl.area())}\n S of Rectangle is ${rect.area()}`;
// };
// console.log(getarea());

// ----------------------------------------------------------------

// 4.დესტრუქტურიზაცია

// const user = {
//     profile: {
//         name:"Ana",
//           contacts: {
//              email:"a@mail.com",
//              phone:"123"
//         }
//     }
// };


// const {profile:{name,contacts:{email,phone}}}=user;
// console.log(name,email,phone);

// ---------------------------------------------------------------

// 5.

// function createuser(name, ...rest){
//     return {name, hobbies:[...rest]};
// }

// console.log(createuser("alex","programming","gaming","music"));

// ----------------------------------------------------------------

// 6.

// const product={
//     price:2500
// };

// Object.defineProperty(product,'discountedPrice',{
//     value:35,
//     writable:false,
//     enumerable:false,
// });

// const key=Object.keys(product);
// console.log(key);
// const value=Object.values(product);
// console.log(value);

// -----------------------------------------------------------------

// 7.
// 'use strict';

// const config={
//     brand:"BMW",
//     model:"M5",
//     engine:"S63B44B",
//     maxspeed:"320km/h"
// };
// Object.freeze(config);
// config.model="535";
// console.log(config);

// ------------------------------------------------------------------

// 8.

// const settings={
//     brand:"Apple",
//     model:"Iphone 17 Pro Max",
//     memory:"12 GB RAM",
//     weight:"233 grams",
//     isAvailable:true
// };

// Object.seal(settings);
// settings.price="2300";
// console.log(settings);
// settings.isAvailable=false;
// console.log(settings);

// ------------------------------------------------------------------

// 9.

// class Temperature{
//     constructor(celsius){
//         this.celsius=celsius;
//     }
//     get fahrenheit(){
//         return `${this.celsius*1.8+32} Fahrenheit`;
//     }

//     set fahrenheit(value){
//         return `${this.celsius=Math.round((value-32)/1.8)+ "Celsius"}`;
//     }

// };

// const cel=new Temperature(35);
// console.log(cel.fahrenheit);
// cel.fahrenheit=115;
// console.log(cel.celsius);

// ---------------------------------------------------------------------

// 10.

// const defaults = {
//     theme: "light",
//     lang: "en"
// };

// const userPrefs = { 
//     lang: "ka",
//     contacts:{
//         phone:"5555",
//         name:"alex"
//     }
// };

// const merged=Object.assign({},defaults,userPrefs);
// console.log(merged);

// როდესაც ობიექტში არის ობიექტი Object.assign() დროს ის წამოიღებს ჩაშენებული ობიექტს, მისი მნიშვნელობის გარეშე.

