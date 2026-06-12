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
