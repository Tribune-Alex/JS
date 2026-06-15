// დავალება 1 — Shallow Copy vs Deep Copy

// const company = {
//     name: "Tech Corp",
//     address: {
//         city: "თბილისი",
//         street: "რუსთაველი"
//     },
//     employees: [
//         { name: "Ana", age: 25 },
//         { name: "Gio", age: 30 }
//     ]
// };

// const shallowcopy={...company};
// const deepcopy=structuredClone(company);

// shallowcopy.address.city="ბათუმი";
// shallowcopy.employees[0].name="თეა";



// deepcopy.address.city="ზუგდიდი";
// deepcopy.employees[0].name="ლიკა";

// console.log(company);
// console.log(deepcopy);
// console.log(company.address === shallowcopy.address);
// console.log(company.address === deepcopy.address);
// console.log(company.employees === shallowcopy.employees);
// console.log(company.employees === deepcopy.employees);

// ------------------------------------------------------------------------

// დავალება 2 — Call, Apply, Bind

// function calculateSalary(bonus, tax) {
//     return `${this.salary+bonus-tax}`;
// }

// const emp1 = { name: "Ana", salary: 3000 };
// const emp2 = { name: "Gio", salary: 4500 };
// const emp3 = { name: "Nika", salary: 6000 };

// console.log(calculateSalary.call(emp1,1000,100));
// console.log(calculateSalary.apply(emp2,[1000,100]));
// const calemp3=calculateSalary.bind(emp3);
// const calemp2=calculateSalary.bind(emp2);
// const calemp1=calculateSalary.bind(emp1);

// console.log(`${calemp3(1000,100)}\n${calemp2(1000,100)}\n${calemp1(1000,100)}`);

// -------------------------------------------------------------------------

// დავალება 3 — დაკარგული this

// const timer = {
//   name: "Main Timer",
//   start() {
//     setTimeout(function () {
//       console.log(this.name);
//     }, 1000);
//   }
// };

// 1.undefined იმიტომ გამოდის ვინაიდან this არ მუშაობს setTimeout ფუნქციაში
// 2. გამოსწორებული ვარიანტი Arrow ფუნქციის მეშვეობით

// const timer = {
//     name: "Main Timer",
// };

// const rep = () => {
//     setTimeout(() => {
//         console.log(timer.name);
//     }, 1000);

// };

// rep();
// 3.bind() გამოყენებით

// function repeatname() {
//     return `${this.name}`;
// }

// const timer = {
//     name: "Main Timer",
// };

// const rep = repeatname.bind(timer);

// setTimeout(() => {
//     console.log(rep());
// }, 1000);

// 4.self=this მეთოდი

// const timer = {
//   name: "Main Timer",
//   start() {
//     const self=this;
//     setTimeout(function () {
//       console.log(self.name);
//     }, 1000);
//   }
// };

// timer.start();

// --------------------------------------------------------------------

// დავალება 4 — Static Properties და Static Methods


// class Product{
//     static count=0;
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//         Product.count++;
//     };
//     static get totalProducts(){
//         return Product.count;
//     };
//     static get Statistics(){
//         return `There are X created in system`;
//     };
//     static createDefault(name,price){
//         return new Product(name,price);
//     };

// };

// const p1=new Product("iphone",1750);
// const p2=new Product("apple",1850);
// const p3=Product.createDefault("MacBook",1900);
// console.log(p3);
// console.log(Product.totalProducts)

// -----------------------------------------------------------------

// დავალება 5 — Private Fields

// class Employee{
//  #salary;
//     constructor(name,salary){
//         this.name=name;
//         this.#salary=salary;
//     }

//     increaseSalary(amount){
//         this.#salary+=amount;
//         return this.#salary;
//     }
//     get salary(){
//         return this.#salary;
//     }

// };

// const emp=new Employee("John",1500);
// emp.increaseSalary(150);
// console.log(emp.#salary);
// const emp2=new Employee("Jane",750);
// emp2.increaseSalary(450);
// console.log(emp2.#salary);

// ------------------------------------------------------------------

// დავალება 6 — OOP + Inheritance

// class Vehicle {
//     constructor(brand, year) {
//         this.brand = brand;
//         this.year = year;
//     }
//     describe() {
//         return `${this.brand} ${this.year}`;
//     }
// };

// class Car extends Vehicle {
//     describe() {
//         return `${this.brand} ${this.year} is a car`;
//     }
// };

// class Truck extends Vehicle {
   
//     describe() {
//         return `${this.brand} ${this.year} is a truck`;
//     }
// };

// class Motorcycle extends Vehicle{
  
//     describe(){
//         return `${this.brand} ${this.year} is a motorcycle`;
//     }
// };


// const car=new Car("BMW M5",2025);
// console.log(car.describe());
// const truck=new Truck("Mack Keystone",2026);
// console.log(truck.describe());
// const bike=new Motorcycle("Ducatti",2018);
// console.log(bike.describe());

// class Vehicle{
//     constructor(brand,year){
//         this.brand=brand;
//         this.year=year;
//     }

//     get describe(){
//         return `${this.brand} was founded in ${this.year}`;
//     }
// };

// class Car extends Vehicle{
//     constructor(brand,year){
//         super(brand,year);
//     }
//     get describe(){
//         return `${this.brand} was produced in ${this.year}`;
//     }
// };

// class Truck extends Vehicle{
//       constructor(brand,year){
//         super(brand,year);
//     }
//     get describe(){
//         return `${this.brand} was produced in ${this.year}`;
//     }
// };

// class Motorcycle extends Vehicle{
//       constructor(brand,year){
//         super(brand,year);
//     }
//     get describe(){
//         return `${this.brand} was produced in ${this.year}`;
//     }
// };

// const m5=new Car("BMW M5",1984);
// const m6=new Car("BMW M3",1986);
// const mack=new Truck("Mack B-61",1962);
// const peterbilt=new Truck("The Peterbilt 379",1987);
// const ducati=new Motorcycle("Ducati 916",1994);
// const harley=new Motorcycle("Harley-Davidso Fat Boy",1991);
// console.log(mack.describe);
// console.log(ducati.describe);
// let arr=[];
// arr.push(m5,m6,mack,peterbilt,ducati,harley);
// for(let i of arr){
//     console.log(i);
// };