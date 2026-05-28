// ამოცანა 1 — ლუწი თუ კენტი

// const n=parseInt(prompt("Input the number"))

// function isEven(n){
//     if(n%2===0){
//         document.write(`(${n}) figure is even`);
//     }else if(n%2!==0){
//         document.write(`(${n}) figure is odd`);
//     }
// }

// isEven(n);

// --------------------------------------------------

// ამოცანა 2 — სამი რიცხვის მაქსიმუმი
// let a=parseInt(prompt("Input the first number"));
// let b=parseInt(prompt("Input the second number"));
// let c=parseInt(prompt("Input the third number"));
// let arr=[a,b,c];
// document.write(`Your numbers: (${arr})`);
// function getMax(a,b,c){
//     if(a>b && a>c){
//         document.write(`The (${a}) is greater than (${b}) and (${c})`);
//     }else if(b>a && b>c){
//         document.write(`The (${b}) is greater than (${a}) and (${c})`);
//     }else if(c>a && c>b){
//         document.write(`The (${c}) is greater than (${a}) and (${b})`);
//     }
// }

// getMax(a,b,c);4

// -----------------------------------------------------

// ამოცანა 3 — ქულიდან შეფასება

// let score=Math.round(Math.random()*100);
// document.write(score);

// function getGrade(score){
//     switch (score) {
//         case score:
//             if(score>=90 && score<=100){
//                 document.write("A-Grade");
//             }else if(score>=80 && score <=89){
//                 document.write("B-Grade");
//             }else if(score>=70 && score<=79){
//                 document.write("C-Grade");
//             }else if(score>=60 && score<=69){
//                 document.write("D-grade");
//             }else{
//                 document.write("F-Grade");
//             }
            
//             break;
    
//         default:
//             break;
//     }
// }

// getGrade(score);

// --------------------------------------------------------------

// ამოცანა 4 — მასივის ჯამი

// function sumArray(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([3,4,5]));

// --------------------------------------------------------------

// ამოცანა 5 — ტემპერატურის კონვერტაცია

// alert("Tempeture converter C to F or F to C");

// let value =+prompt("Input the value");
// let unit =prompt("Choose tempeture unit").toUpperCase();

// function convertTemp(value,unit){
//     let result=0;
//     if(unit=="C"){
//         result+=Math.round((value*9/5)+32);
//     }else if(unit=="F"){
//         result+=Math.round((value-32)*5/9);
//     }else{
//         alert("Unknow unit");
//     }
//     return result;
// }

// document.write(convertTemp(value,unit));

// -------------------------------------------------------------------

// ამოცანა 6 — პალინდრომი

// let str = prompt("Input the word");
// let reverse ="";

// function isPalindrome(str){
//     for(let i=str.length-1;i>=0;i--){
//         reverse+=str[i];
//     }
//     let compare=str.localeCompare(reverse,undefined,{sensitivity: 'base'})===0;
//     if(compare===true){
//         console.log(`(${str}) is palindrome word`);
//     }else{
//         console.log(`(${str}) is not palindrome word`);
//     }
//     return reverse;
// }

// console.log(isPalindrome(str));

// ------------------------------------------------------------

// ამოცანა 7 — მარტივი რიცხვი

// let n =parseInt(prompt("Input the number"));

// function isPrime(n){
//     let count=0;
//     if(n<1){
//         alert("Prime number cant be less than 1");
//     }else{
//         for(let i=1;i<=n;i++){
//             if(n%i===0){
//                 count++;
//             }
//         }
//         if(count===2){
//             console.log(`(${n}) is a prime number`);
//         }else{
//             console.log(`(${n}) is not a prime number`);
//         }
//     }
//     return n;
// }

// console.log(isPrime(n));

// ------------------------------------------------------------

// ამოცანა 8 — ფაქტორიალი

// const n=parseInt(prompt("Input the number"));

// function factorial(n){
//     let sum=1;
//     if(isNaN(n) || n<0){
//         alert("Error");
//     }else{
        
//         for(let i=1; i<=n;i++){
//             sum*=i;
//         }
//     }
//     return sum;
// }
// console.log(factorial(n));

// ------------------------------------------------------------

// ამოცანა 9 — ფიბონაჩის რიგი

// const n=+prompt("Input the number");

// function fibonacci(n){
//     let start=0;
//     let after=1;
//     let next;
//     if(n<0){
//         alert("Error");
//     }else if(n===0){
//         next=1;
//     }else if(n===1){
//         next=1;
//     }
//     else{
//         for(let i=2;i<=n;i++){
//             next=start+after;
//             start=after;
//             after=next;
//         }
//     }
//     return next;
// }

// console.log(fibonacci(n));

// -------------------------------------------------------------

// ამოცანა 10 — ციფრების ჯამი

// let n=+prompt("Input the number");
// function sumDigits(n){
//     let m=Math.abs(n).toString();
//     let sum=0;
//     for(let i=0; i<m.length;i++){
//         sum+=+m[i];
//     }
//     if(n<0){
//         sum*=-1;
//     }
//     return sum;
// }

// console.log(sumDigits(n));

// ----------------------------------------------------------------

// ამოცანა 11 — სიტყვების დათვლა


// let str=prompt("Input the text").trim();
// console.log(str);

// function countWords(str){
//     let count=0;
//     let newstr=str.split(" ");
//     for(let i=0;i<newstr.length;i++){
//         if(newstr[i]!==""){
//             count++;
//         }  
//     }
    
//     return count;
// }

// console.log(`The are (${countWords(str)}) words in your text`);

// -----------------------------------------------------------------

// ამოცანა 12 — ყველაზე გრძელი სიტყვა

// let str=prompt("Input the text").trim();
// console.log(str);

// function longestWord(str){
//     let total=0;
//     let result="";
//     let newstr=str.split(" ");
//     for(let i=0; i<newstr.length;i++){
//        if(newstr[i].length>total){
//         total=newstr[i].length;
//         result=newstr[i];
//        }
//     }
//     return result;
// }

// console.log(`(${longestWord(str)}) is the longest word in the text`);

// ---------------------------------------------------------------------------

// ამოცანა 13 — დუბლიკატების წაშლა


// let number=+prompt("Input the number");

// function removeDuplicates(number){
//     let str=number.toString();
//     let arr=Array.from(String(str),Number);
//     let newarr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
//             arr.slice(i,1);
//             newarr.push(arr[i]);
//         }
//     }
    
//     return newarr;
// }

// console.log(removeDuplicates(number));

// ----------------------------------------------------------------

// ამოცანა 14 — მასივების გადაკვეთა

// let first=+prompt("Input the first number");
// let second=+prompt("Input the second number");
// let arr1=Array.from(String(first),Number);
// let arr2=Array.from(String(second),Number);

// function intersect(arr1, arr2){
//     let arr3=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 arr3.push(arr1[i]);
//             }
//         }
//     }
//     return arr3;
// }

// console.log(intersect(arr1,arr2));

// ---------------------------------------------------------------

// ამოცანა 15 — გამრავლების ცხრილი სტრინგად

// const n = parseInt(prompt("Input the number"));

// function multiTable(n){
//     let sum;
//     for(let i=1;i<11;i++){
//         sum=n*i;
//         console.log(`${n} X ${i} = ${sum}`);
//     }
    
// }

// multiTable(n);

//----------------------------------------------------------------------------- 

// ამოცანა 16 — სტრინგის შებრუნება ლუპით

// const str = prompt("Input the word");
// console.log(str);
// function reverseStr(str){
//     let arr = Array.from(String(str));
//     let reverse="";
//     for(let i=arr.length-1;i>=0;i-- ){
//         reverse+=arr[i];
//     }
//     return reverse;
// }

// console.log(reverseStr(str));

// ----------------------------------------------------------------------

// ამოცანა 17 — caesarCipher

// let str=prompt("Input the word").toLowerCase();
// let shift=parseInt(prompt("Input the number"));

// function caesarCipher(str, shift){
//     let newword="";
//     if(shift>=1 && shift<=25){
//         for(let i=0;i<str.length;i++){
//             newword+=String.fromCharCode(str.charCodeAt(i)+shift);
//         }
//     }
//     return newword;
// }

// console.log(caesarCipher(str,shift));

// -----------------------------------------------------------------------

// ამოცანა 18 — მიმდინარე მაქსიმუმების მასივი

// const num =prompt("Input the number").split(" ");

// function runningMax(num){
//     let arr=Array.from(String(num),Number);
//     let max=0;
//     let digit=0;
//     let newarr=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//             digit=max;
//             newarr.push(digit);
//         }else if(arr[i]<max){
//             newarr.push(digit);
//         }
//     }
//     return newarr;
// }

// console.log(runningMax(num));

// -----------------------------------------------------------------

// ამოცანა 19 — FizzBuzz მასივში

// const n=+prompt("Input the number");

// function fizzBuzzArray(n){
//     let arr=[];
//     for(let i=1;i<=n;i++){
//         if(i%3===0 && i%5===0){
//             arr.push("FizzBuzz");
//         }else if(i%5===0){
//             arr.push("Buzz");
//         }else if(i%3===0){
//             arr.push("Fizz");
//         }else{
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(fizzBuzzArray(n));

// ---------------------------------------------------------------

// ამოცანა 20 — რიცხვების კლასიფიკატორი

// function classifyNumbers(arr){
//     let possite=0;
//     let negative=0;
//     let zero=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//             possite++;
//         }else if(arr[i]<0){
//             negative++;
//         }else if(arr[i]===0){
//             zero++;
//             possite++;
//         }
//     }
//     console.log(`The array contains(positive:(${possite})|negative:(${negative})|Zero:(${zero}) digits`);
// }

// classifyNumbers([-7,6,0,0,-8,10]);
