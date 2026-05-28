// საკლასო დავალება გამოაჩინე მარტივი რიცხვები

// const n = parseInt(prompt("Input the number"));

// for(let i=2; i<=n;i++){
//     let count =0;
//     for(let p=1;p<=i;p++){
//         if(i%p===0){
//             count++;
//         }
//     }
//     if(count===2){
//         console.log(i);
//     }
// }





// დავალება 1 ლუწი რიცხვების ჯამი

// const n = parseInt(prompt("input the number"));
// let begin = 0;

// for(let i=1; i<n;i++){
//     if(i%2==0){
//         begin+=i;
//     }
// }

// console.log(begin);

// -----------------------------------------------------------

// დავალება 2 გამრავლების ცხრილი

// const n = Math.round(Math.random()*10);
// console.log(`choosen number ${n}`);
// for(let i=1; i<11;i++){
//     const sum=n*i
//     console.log(`${n} X ${i} = ${sum}`);
// }

// ------------------------------------------------------------

// დავალება 3 ციფრების ჯამი

// let n=parseInt(prompt("Input number"));
// let sum=0;

// while(n>0){
//     sum+=n%10;
//     n=Math.floor(n/10);
// }

// console.log(sum);

// -------------------------------------------------------------

// დავალება 4 ფაქტორიალი

// const n=parseInt(prompt("Input number"));

// if(isNaN(n) || n<0){
//     alert("Error");
// }else{
//     let sum=1;
//     for(i=1;i<=n;i++){
//         sum*=i;
        
//     }
//     console.log(sum);
// }

// -------------------------------------------------------------

// დავალება 5 შებრუნებული რიცხვი

// let n = parseInt(prompt("Input the number"));
// let reverse="";

// while(n>0){
//     reverse += n % 10;
//     n=Math.floor(n/10);
// }

// console.log(reverse);

// --------------------------------------------------------------

// დავალება 6 სტრიქონების განმეორება

// const t = prompt("Enter the word");
// const n = parseInt(prompt("Input the number"));
// let s = "";

// for(let i = 0; i<=n;i++){
//     s+=t+"-";
    
// }

// console.log(s);

// --------------------------------------------------------------

// დავალება 7 ხარისხი მარტივად

// const first = parseInt(prompt("Input first number"));
// const second = parseInt(prompt("Input second number"));

// let pow = 1;
// let i = 0;

// while(i<second){
//     pow=pow*first;
//     i++
// }

// const result = pow;

// if(result==Math.pow(first,second)){
//     console.log(`${first} ხარისხად ${second} = ${result}`);
// }else{
//     console.warn("Error");
// }

// ---------------------------------------------------------------

// დავალება 8 ჩამოთვლა პირობით

// const n = parseInt(prompt("Input the number"));
// let i = 1;
// while(i<n){
//     i++;
//     if(i%3==0){
//         document.write("Fizz");
//     }else if(i%5==0){
//         document.write("Buzz");
//     }
//     else{
//         document.write(i);
//     }
// }

// ---------------------------------------------------------------

// დავალება 9 სიმბოლოების დათვლა

// let text = prompt("Input text").toLowerCase();
// let symbol =prompt("Input symbol").toLowerCase();
// let lenght =text.length;
// let numeric=Number(lenght);
// let total=0;


// for(let i=0; i<numeric;i++){
//     if(text[i]===symbol){
//         total++;
        
//     }
    
// }

// console.log(`The are ${total} (${symbol}) in the text`);

// ------------------------------------------------------------------

// დავალება 10 რიცხვი პირველია

// const n = parseInt(prompt("Enter the number"));
// let total = 0;
// for (let i=1;i<=n;i++){
//      if(n%i===0){
//         total++;     
//     }
    
// }

// if (total === 2) {
//     console.log(`${n} is prime number`);
// } else {
//     console.log(`${n} is not prime number`);
// }

// -------------------------------------------------------------------

// დავალება 11 გამოცნობის თამაში

// const num = Math.round(Math.random()*50);
// console.log(num);
// let count = 5;
// while(count>0){
//     const v=parseInt(prompt("Input number"));
//     if(v!=num){
//         count--;
//         if(v>num){
//             alert(`გამოსაცნობი რიცხვი (${v}-ზე) ნაკლებია, დარჩენილი მცდელობის რაოდენობა: ${count} `);
//         }else if(v<num){
//             alert(`გამოსაცნობი რიცხვი (${v})-ზე მეტია, დარჩენილი მცდელობის რაოდენობა: ${count}`);
//         }
//     }
//     else {
//         alert("გამოიცანი");
//         break;
//     }
// }

// --------------------------------------------------------------------

// დავალება 12 ორობითი გადაყვანა

// let n=parseInt(prompt("Input number"));
// let string="";
// while(n>0){
//  let b = n%2;
//  string=b+string;
//  n=Math.floor(n/2);
    
// }
// console.log(string);

// ---------------------------------------------------------------------

// დავალება 13 კოლაცის თანმიმდევრობა

// let N=parseInt(prompt("Input the number"));
// let count=N;
// let total=0;
// while(count>1){
//     count--;
//     total++;
//     if(N%2===0){
//         console.log(N=N/2);
//     }else{
//         console.log(N=3*N+1);
//     }
// }

// console.log(`დასჭირდა ${total} ნაბიჯი`);

// -----------------------------------------------------------------------

// დავალება 14 ბანკის სიმულაცია

// let money = parseInt(prompt("Input the amount"));
// let month=0;
// while(money>0){
//     month++;
//     money= money+money*0.05;
//     money=money-200;
//     if(money<0){
//         console.log(`In ${month} month money became 0`);
//     }else{
//         console.log(`Month:${month}: Amount: ${Math.round(money)}`);
//     }
    
// }

// -----------------------------------------------------------------------

// დავალება 15 Armstrong-ის რიცხვები

// let count=0;

// for(let i=100; i<1000;i++){
   
//    let first=Math.floor(i/100);
//    let second=Math.floor((i%100)/10);
//    let third=i%10;
//    let arm=Math.pow(first,3)+Math.pow(second,3)+Math.pow(third,3);
//    if(arm===i){
//    count++
   
//    }
// }
// console.log(`There are (${count}) Armstrong numbers`);

// -----------------------------------------------------------------------

// დავალება 16 სიტყვის დაშიფვრა (Caesar Cipher)

// let word="HELLO";
// let N=parseInt(prompt("Input the number"));

// if(N>=1 && N<=25){
//  let newword="";
//     for(let i=0;i<word.length;i++){
//        newword+=String.fromCharCode(word.charCodeAt(0)+N)+String.fromCharCode(word.charCodeAt(1)+N)+String.fromCharCode(word.charCodeAt(2)+N)+String.fromCharCode(word.charCodeAt(3)+N)+String.fromCharCode(word.charCodeAt(4)+N);
       
//     }

// console.log(newword);
    
// }
// else{
//     alert("Input between 1 to 25");
// }

// -------------------------------------------------------------------------

// დავალება 17 შეიყვანე მთელი რიცხვი


// let n = parseInt(prompt("Input the number"));
// let main=n;
// let reverse=0;

// while(n>0){
//     reverse=reverse*10+(n % 10);
//     n=Math.floor(n/10);
    
// }

// if(reverse===main){
//     console.log(`${main} number is read the same on both sides`);
// }else{
//     console.log(`${main} number does not read the same on both sides`);
// }

// დავალება 18 შეიყვანე მთელი რიცხვი და იპოვე უდიდესი და უმცირესის სხვაობა

// let n = parseInt(prompt("Input number"));

// let highest = 0;
// let lowest = 9;

// while (n > 0) {
//     let number = n % 10;
//     if (number > highest) {
//         highest = number;
//     }
//     if (number < lowest) {
//         lowest = number;
//     }
//     n = Math.floor(n / 10);
// }

// console.log(`${highest} - ${lowest} = ${highest - lowest}`);

// ---------------------------------------------------------------------





