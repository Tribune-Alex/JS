// 1. User ობიექტის შექმნა სხვადასხვა გზით

// •	Object Literal 

// const user={
//     name:name,
//     age:30,
//     greet(){
//         return this.name;
//     }
// }
// user.name="Alex";
// user.age=35;

// console.log(user.greet());

// •	Constructor Function 

// function User(name,age){
//     this.name=name;
//     this.age=age;
//     this.greet=()=>{
//         return this.name;
//     }
// }

// const nam=new User("Alex");
// const namu=nam.name;
// console.log(namu);

// •	Object.create() 

// const user={
//     greet(){
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// const obj=Object.create(user);
// obj.name="Michael";
// obj.age=33;
// console.log(obj.greet());


// •	Class 

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// const user1=new User("Ken",35).greet();
// console.log(user1);

// -------------------------------------------------------------------------------

// 2. Factory Function vs Constructor Function

// function createCar(brand,speed){
//     return{
//         brand:brand,
//         speed:speed,
//         accelerate(n){
//             speed+=n;
//             console.log(`The max speed is ${speed}`);
//         }
//     }
// }

// const bmw=createCar("BMW M5",330);
// bmw.accelerate(35);

// function car(brand,speed){
//     this.brand=brand;
//     this.speed=speed;
//     this.accelerate=(n)=>{
//         this.speed+=n;
//         console.log(`The max speed is ${this.speed}`);
//     }

// }

// const maserati=new car("Maserati Ghibli",210);
// maserati.accelerate(50);

// console.log(bmw instanceof car);
// console.log(maserati instanceof car);

// ---------------------------------------------------------------------

// 3. Object.create() და პროტოტიპები

// const animal={
//     breathe(){
//         return `${this.name} is`;
//     }
// }

// const dog=Object.create(animal);
// dog.bark=function(){
//     return "Barking";
// }

// dog.name="Pitbull"

// console.log(dog.breathe());
// console.log(dog.bark());

// console.log(Object.getPrototypeOf(dog)===animal);

// const nul=Object.create(null);
// console.log(Object.getPrototypeOf(nul));

// ობიექტ null არ გააჩნია პროტოტიპი და მეთოდები ვინაიდან იერარქიის მიხედვით მაგაზე მაღლა არაფერი დგას.

// -------------------------------------------------------------------------------

// 4. პროტოტიპული ჯაჭვი

// class Living{
//     constructor(name){
//         this.name=name;
//     }
//     born(){
//         return ` alive `
//     }
//     static create(n){
//         return new Living(n);
//     }
// }

// class Animal extends Living{
//     alive(){
//         return `${this.name} is living animal`;
//     }
// }

// class Dog extends Animal{
//     dog(){
//         return `${this.name} is a dog`;
//     }
// }

// class MyDog extends Dog{
//     mydog(){
//         return `${this.name} is my dog`;
//     }
// }

// const dog1=new MyDog("Pitbull");
// console.log(dog1.mydog());
// console.log(dog1.dog());
// console.log(dog1.alive());
// console.log(dog1.born());

// console.log(dog1.hasOwnProperty("name"));
// console.log(Object.getPrototypeOf(dog1));
// console.log("name" in dog1);
// console.log("color" in dog1);

// -------------------------------------------------------------------

// 5. Drag & Drop სიის დალაგება

// let dragged=null;
// document.querySelectorAll("li").forEach(item =>{
//     item.addEventListener('dragstart',function(){
//         dragged=this;
//     })
// });

// document.querySelectorAll("ul, .div2").forEach(list =>{
//     list.addEventListener("dragover",function(e){
//         e.preventDefault();
//     });
//     list.addEventListener("drop",function(e){
//         e.preventDefault();
//         if(dragged){
//             if(this.tagName==="UL"|| this.tagName==="LI"){
//             this.appendChild(dragged);
//             }
//         else{
//             const ul=this.querySelector("ul");
//             if(ul){
//                 ul.appendChild(dragged);
//             }
//         }
//         }
//     });
// });

// ---------------------------------------------------------------

// 6. Typewriter ეფექტი

// const text=["Hello my name is Alex","And I will reply this","Untill you won't stop me"];
// const repeat=document.getElementById("typewriter");
// let textIndex=0;
// let charIndex=0;
// let deleting=false;
//     function type(){
//         const current=text[textIndex];
//         if(!deleting){
//             repeat.innerHTML=current.substring(0,charIndex+1);
//             charIndex++;
            
//            if(charIndex===current.length){
//             deleting=true;
//             setTimeout(type,1000);
//             return;
//           } 
//         }else{
//             repeat.innerHTML=current.substring(0,charIndex-1);
//             charIndex--;

//             if(charIndex===0){
//                 deleting=false;
//                 textIndex=(textIndex+1)% text.length;
//             }
//         }

//         setTimeout(type,80);

//     }
// type();

// ------------------------------------------------------------------------

// 7. RGB ფერის მიქსერი

// const red=document.getElementById("slide1");
// const green=document.getElementById("slide2");
// const blue=document.getElementById("slide3");
// const redhex=document.getElementById("red");
// const greenhex=document.getElementById("green");
// const bluehex=document.getElementById("blue");
// const reset=document.getElementById("reset");

// red.addEventListener("click",function(){
//     redhex.textContent= "#FF0000";
// })

// green.addEventListener("click",function(){
//     greenhex.textContent="#008000";
// })

// blue.addEventListener("click",function(){
//     bluehex.textContent="#0000FF";
// })

// reset.addEventListener("click",function(){
//     redhex.textContent="";
//     greenhex.textContent="";
//     bluehex.textContent="";
// })

// function copyToClipboard(text){
//     navigator.clipboard.writeText(text);
// }
// redhex.addEventListener("click", function(){
//     copyToClipboard(redhex.textContent);
// });
// greenhex.addEventListener("click", function(){
//     copyToClipboard(greenhex.textContent);
// });
// bluehex.addEventListener("click", function(){
//     copyToClipboard(bluehex.textContent);
// });

// ------------------------------------------------------------------

// 8. Accordion FAQ

// const question1=document.getElementById("question1");
// const question2=document.getElementById("question2");
// const question3=document.getElementById("question3");
// const question4=document.getElementById("question4");
// const question5=document.getElementById("question5");
// const question6=document.getElementById("question6");
// const answer1=document.getElementById("ans1");
// const answer2=document.getElementById("ans2");
// const answer3=document.getElementById("ans3");
// const answer4=document.getElementById("ans4");
// const answer5=document.getElementById("ans5");
// const answer6=document.getElementById("ans6");

// question1.addEventListener("mouseover",function(){
//     question1.textContent="Who is the first prezident of Georgia?";
// });
// question1.addEventListener("click",function(){
//     answer1.style.display="flex";
//     answer2.style.display="none";
//     answer3.style.display="none";
//     answer4.style.display="none";
//     answer5.style.display="none";
//     answer6.style.display="none";
//     answer1.textContent="Zviad Gamsakhurdia";
// });

// question2.addEventListener("mouseover",function(){
//     question2.textContent="What is the capital of Georgia?";
// });
// question2.addEventListener("click",function(){
//     answer2.style.display="flex";
//     answer1.style.display="none";
//     answer3.style.display="none";
//     answer4.style.display="none";
//     answer5.style.display="none";
//     answer6.style.display="none";
//     answer2.textContent="Tbilisi";
// });
// question3.addEventListener("mouseover",function(){
//     question3.textContent="How many minutes in 3 hours?";
// });
// question3.addEventListener("click",function(){
//     answer3.style.display="flex";
//     answer2.style.display="none";
//     answer1.style.display="none";
//     answer4.style.display="none";
//     answer5.style.display="none";
//     answer6.style.display="none";
//     answer3.textContent="180 minutes";
// });
// question4.addEventListener("mouseover",function(){
//     question4.textContent="What is capital of Germany?";
// });
// question4.addEventListener("click",function(){
//     answer4.style.display="flex";
//     answer2.style.display="none";
//     answer3.style.display="none";
//     answer1.style.display="none";
//     answer5.style.display="none";
//     answer6.style.display="none";
//     answer4.textContent="Berlin";
// });
// question5.addEventListener("mouseover",function(){
//     question5.textContent="What is a real name of Rachel Green?";
// });
// question5.addEventListener("click",function(){
//     answer5.style.display="flex";
//     answer2.style.display="none";
//     answer3.style.display="none";
//     answer4.style.display="none";
//     answer1.style.display="none";
//     answer6.style.display="none";
//     answer5.textContent="Jenifer Aniston";
// });
// question6.addEventListener("mouseover",function(){
//     question6.textContent="How many days in December?";
// });
// question6.addEventListener("click",function(){
//     answer6.style.display="flex";
//     answer2.style.display="none";
//     answer3.style.display="none";
//     answer4.style.display="none";
//     answer5.style.display="none";
//     answer1.style.display="none";
//     answer6.textContent="31";
// });

// ------------------------------------------------------------

// 9. სურათების კარუსელი

// const previus=document.getElementById("prevBtn");
// const next=document.getElementById("nextBtn");
// const slide1=document.getElementById("one");
// const slide2=document.getElementById("two");
// const slide3=document.getElementById("three");
// const slide4=document.getElementById("four");
// const slide5=document.getElementById("five");
// const wat=document.getElementById("track");
// const dot1=document.getElementById("dot1");
// const dot2=document.getElementById("dot2");
// const dot3=document.getElementById("dot3");
// const dot4=document.getElementById("dot4");
// const dot5=document.getElementById("dot5");
// const dot=document.getElementsByClassName("dot")
// const m3=document.createElement("img");
// const m4=document.createElement("img");
// const m5=document.createElement("img");
// const m6=document.createElement("img");
// const m8=document.createElement("img");
// m3.src="m3.jpeg";
// m3.alt="BMW M3";
// m3.style.height="350px";
// m3.style.width="350px";
// m4.src="m4.jpeg";
// m4.alt="BMW M4";
// m4.style.height="350px";
// m4.style.width="350px";
// m5.src="m5.jpeg";
// m5.alt="BMW M5";
// m5.style.height="350px";
// m5.style.width="350px";
// m6.src="m6.jpg";
// m6.alt="BMW M6";
// m6.style.height="350px";
// m6.style.width="350px";
// m8.src="m8.jpg";
// m8.alt="BMW M8";
// m8.style.height="350px";
// m8.style.width="350px";
// slide1.appendChild(m3);
// slide2.appendChild(m4);
// slide3.appendChild(m5);
// slide4.appendChild(m6);
// slide5.appendChild(m8);

// const slides=[slide1,slide2,slide3,slide4,slide5];
// const dotes=[dot1,dot2,dot3,dot4,dot5];
// let current=0;
// slides[0].style.display="flex";
// dotes[0].style.background="#38bdf8"
// let inter=setInterval(nextSlide,3000);
// function nextSlide(){
//     slides[current].style.display="none";
//     dotes[current].style.background="#64748b";
//     current++;
//     if(current>=slides.length){
//         current=0;
//     }
//     slides[current].style.display="flex";
//     dotes[current].style.background="#38bdf8";
// };
    
    
// wat.addEventListener("mouseover",function(){
//         clearInterval(inter);
//     });

// next.addEventListener("click",function(){
//     slides[current].style.display="none";
//     dotes[current].style.background="#64748b";
//     current++;
//     if(current>=slides.length){
//         current=0;
//     }
//     slides[current].style.display="flex";
//     dotes[current].style.background="#38bdf8";
    
// });
// let reverse=slides.length-1;
// slides[reverse].style.display="flex";
// dotes[reverse].style.background="#64748b";
// previus.addEventListener("click",function(){
//     slides[reverse].style.display="none";
//     dotes[reverse].style.background="#64748b";
//     reverse--;
//     if(reverse<0){
//         reverse=slides.length-1;
//     }
//     slides[reverse].style.display="flex";
//     dotes[reverse].style.background="#38bdf8";

// });


// dotes.forEach((dot, index) => {
//     dot.addEventListener("click", function () {
//         dotes[current].style.background = "#64748b";
//         slides[current].style.display = "none";
//         current = index;
//         dotes[current].style.background = "#38bdf8";
//         slides[current].style.display = "flex";

//         clearInterval(inter);
//     });
// });









