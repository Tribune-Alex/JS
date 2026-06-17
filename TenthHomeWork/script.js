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

// -------------------------------------------------------------------

// დავალება 7 — უნივერსიტეტის სისტემა (ყველა თემის გაერთიანება)

// class Person {
//     static people = [];
//     constructor(name, lastname, subject, status) {
//         this.name = name;
//         this.lastname = lastname;
//         this.subject = subject;
//         this.status = status;
//         Person.people.push(this);
//     }
//     static get list() {
//         return Person.people;
//     }
// };

// class Student extends Person {
//     static allstudents = [];
//     static count = 0;
//     constructor(name, lastname, subject, grade,) {
//         super(name, lastname, subject, "Student");
//         this.grade = grade;
//         Student.count++;
//         Student.allstudents.push(this);
//     }
//     static get allstud() {
//         return Student.allstudents;
//     }

//     static get counter() {
//         return Student.count;
//     }

//     get detail() {
//         return `Student ${this.name} ${this.lastname} has ${this.grade} in ${this.subject}`;
//     }
// };


// class Teacher extends Person {
//     constructor(name, lastname, subject) {
//         super(name, lastname, subject, "Lecturer");
//     }

//     get detail() {
//         return `Lector ${this.name} ${this.lastname} teaches ${this.subject}`;

//     }
// };

// class University{
//     static get everyone() {
//         return Person.people;
//     }
//     static adding(name, lastname, subject, status) {
//         return new Person(name, lastname, subject, status);
//     }
//     static find(name,lastname){
//         for(let i in Person.people){
//             if(Person.people[i].name===name && Person.people[i].lastname===lastname){
//                 console.log(Person.people[i]);
//                 break;
//             }
//         }
//     }

//     static delete(name, lastname) {
//         for(let i in Person.people){
//             if(Person.people[i].name===name && Person.people[i].lastname===lastname){
//                 Person.people.splice(i,1);
//                 break;
//             }
//         }
//     }
// };

// const teacher1 = new Person("James", "Brown", "Math", "Lecturer");
// const student1 = new Student("Alex", "Todua", "Math", 100);
// const teacher2 = new Teacher("Michael", "Ballack", "Football");
// const student2 = new Student("Thomas", "Azier", "Music", 100);


// function hello(text) {
//     return `${text} ${this.name} ${this.lastname}`;
// };

// console.log(hello.call(student1, "Hello I am"));
// console.log(hello.call(student2, "Hello I am"));

// function display(one, two) {
//     return `${one} ${this.name} ${this.lastname} ${two} ${this.status}`;
// }

// console.log(display.apply(student2, ["Hello my name is", "and I am a"]));
// console.log(display.apply(teacher2, ["Hello my name is", "and I am a"]));

// const stud1 = display.bind(student1);
// const stud2 = display.bind(student2);
// const teach1 = display.bind(teacher1);
// const teach2 = display.bind(teacher2);

// console.log(`${stud1("Hello my name is", "and I am a")}\n${stud2("Hello my name is", "and I am a")}\n${teach1("Hello my name is", "and I am a")}\n${teach2("Hello my name is", "and I am a")}`);

// console.log(Student.counter);

// console.log(Student.allstud);

// const deepcory = structuredClone(Student.allstud);
// deepcory[0].name = "Sebastian";
// deepcory[1].lastname = "Connor";
// console.log(deepcory);


// const teacher3=University.adding("Ross","Geller","Paleontologist","Lecturer");
// University.delete("Ross","Geller");
// console.log(University.everyone);
// University.find("Michael","Ballack");

// -----------------------------------------------------------------------------------

// დავალება 8 — ბანკის სისტემა (კომპლექსური)

// class BankAccount{
//     static acountsall=[];
//     #balance=0;
//     constructor(owner,account){
//         this.owner=owner;
//         this.account=account;
//         BankAccount.acountsall.push(this);
//     }
//     static get detail(){
//         return BankAccount.acountsall;
//     }
//     deposit(amount){
//         if(amount>0){
//             this.#balance+=amount;
//         }
//     }
//     withdraw(amount){
//         if(this.#balance-amount>=0){
//            this.#balance-=amount;
//         }else{
//             console.log("There is not enough money");
//         }
//     }
//     static transfer(enc,dest,amount){
//        let from=null;
//        let to=null;
//        for(let i=0; i<BankAccount.acountsall.length;i++){
//             const aaa=BankAccount.acountsall[i];
//             if(aaa.account===enc){
//                 from=aaa;
//             }
//             if(aaa.account===dest){
//                 to=aaa;
//             }

//        }
//        if(from.#balance <amount){
//         console.log("There is not enough money");
//         return;
//        }
//        from.#balance -=amount;
//        to.#balance +=amount;
//     }
//     get getbalance(){
//         return this.#balance;
//     }
// };

// const acc1=new BankAccount("Mike","GE1111");
// const acc2=new BankAccount("Jimmy","GE3333");
// const acc3=new BankAccount("Steve","GE5555");
// acc1.deposit(1500);
// acc1.withdraw(17);
// acc2.deposit(1000);
// acc2.withdraw(157);
// acc3.deposit(500);
// acc3.withdraw(14);
// BankAccount.transfer("GE1111","GE5555",500);
// BankAccount.transfer("GE3333","GE1111",150);
// console.log(BankAccount.detail);






