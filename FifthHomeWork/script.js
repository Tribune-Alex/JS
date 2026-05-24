// დავალება 4.1 

// let arr=["a",3,"b","c",4,10];
// document.write(`The massive [${arr}] length is ${arr.length}`);

// ----------------------------------------------------------------

// დავალება 4.2

// let arr=["a","b","c"];
// arr.splice(0,0,"d");
// arr.splice(1,1,"x");
// document.write(arr);

// ----------------------------------------------------------------

// დავალება 4.3

// let arr=[];
// arr.push("a","b","c");
// document.write(`After adding let arr = [${arr}]`);

// ----------------------------------------------------------------

// დავალება 4.5

// let arr=["a","b","c","d","e"];
// console.log(arr.length);
// delete arr[1];
// delete arr[3];
// console.log(`${arr}`);
// console.log(arr.length);

// ----------------------------------------------------------------

// დავალება 4.6

// let names=["ხვიჩა","გოგა","მაკა","ანა","ინა"];
// let abc=[];
// let reverse=[];
// let first = names.slice(3,4).join("");
// console.log(first);
// let second = names.slice(1,2).join("");
// console.log(second);
// let third = names.slice(4).join("");
// console.log(third);
// let fourth = names.slice(2,3).join("");
// console.log(fourth);
// let fifth = names.slice(0,1).join("");
// console.log(fifth);
// abc=[first,second,third,fourth,fifth];
// console.log(abc);


// for(i=abc.length-1;i>=0;i--){
//     reverse.push(abc[i]);
// }

// console.log(reverse);

// ----------------------------------------------------------------

// დავალება 4.7

// let nums = [5, -3, 10, -8, 7, -1];
// let positive=0;
// let negative=0;

// for(let i=0; i<=nums.length-1;i++){
//     if(nums[i]>0){
//         positive++;
//     }else{
//         negative++;
//     }
// }

// console.log(`There are (${positive}) positive and (${negative}) negative numbers in array: [${nums}]`);

// ----------------------------------------------------------------

// დავალება 4.8

// let num = 3245;
// console.log(num);
// let arr = Array.from(String(num));
// let first =+arr.slice(0,1).join("");
// let second=+arr.slice(1,2).join("");
// let third=+arr.slice(2,3).join("");
// let fourth=+arr.slice(3,4).join("");
// let total=first*second*third*fourth;
// console.log(`${first} X ${second} X ${third} X ${fourth} = ${total}`);

// -------------------------------------------------------------------

// დავალება 4.9

// let word = "level";
// console.log(word);
// let check="";
// for(let i=word.length-1;i>=0;i--){
//     check+=word[i];
// }

// console.log(check);

// if(word===check){
//     console.log(`The word (${word}) is palindrome`);
// }else{
//     console.log(`The word (${word}) is not palindrome`);
// }

// -----------------------------------------------------------------------

// დავალება 4.10

// let num = 77337725;
// let arr = Array.from(String(num),Number);
// console.log(arr);

// let total=0;
// let number=0;

// for(let i = 0; i<arr.length;i++){
//     let count=0;
    
//     for(let j=0; j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             count++;
//         }
//     }
//     if(count>total){
//         total=count;
//         number=arr[i];
//     }

// }

// console.log(`(${number}) is the most common digit in a (${num}).`);

// ------------------------------------------------------------------------------

// ამოცანა 11

// let numbers = [18, 123, 456, 99, 1001, 333, 72, 81, 200, 45];
// let arr=[];
// let triple=[];
// let four=[];
// for(let i=0; i<numbers.length;i++){
//     if(numbers[i]>=10 && numbers[i]<100){
//         arr.push(numbers[i]);
//     }else if(numbers[i]>=100 && numbers[i]<1000){
//         triple.push(numbers[i]);
//     }else if(numbers[i]>=1000 && numbers[i]<10000){
//         four.push(numbers[i]);
//     }
// }
// console.log(arr);
// console.log(triple);
// console.log(four);


// let first=[];

// for(let h=0;h<arr.length;h++){
//     if((Math.floor(arr[h]/10)+Math.floor(arr[h]%10))%9===0){
//     let sum=Math.floor(arr[h]/10)+Math.floor(arr[h]%10);
//     first.push(arr[h]);
//     }
// }

// console.log(first);

// let second=[];

// for(let r=0;r<triple.length;r++){
//     if((Math.floor(triple[r]/100)+Math.floor((triple[r]/10)%10)+Math.floor(triple[r]%10))%9===0){
//     let total=Math.floor(triple[r]/100)+Math.floor((triple[r]/10)%10)+Math.floor(triple[r]%10);
//     second.push(triple[r]);
//     }
// }
// console.log(second);

// let three=[];
// for(let m=0;m<four.length;m++){
//     if((Math.floor(four[m]/1000)+Math.floor((four[m]/100)%10)+Math.floor((four[m]/10)%10)+Math.floor(four[m]%10))%9===0){
//         let all=(Math.floor(four[m]/1000)+Math.floor((four[m]/100)%10)+Math.floor((four[m]/10)%10)+Math.floor(four[m]%10));
//         three.push(four[m]);
//     }
// }

// console.log(three);

// console.log(first.concat(second).concat(three));

// ------------------------------------------------------------------------------------------------------------------------------

// ამოცანა 12 FizzBuzz Plus

// const n=Math.round(Math.random()*50);
// let i=1;
// while(i<n){
//     i++
//     if(i%3===0){
//         document.write("Fizz");
//     }else if(i%5===0){
//         document.write("Buzz");
//     }else if(i%7===0){
//         document.write("Jazz");
//     }else if(i%3===0 && i%5===0){
//         document.write("FizzBuzz");
//     }else if(i%3===0 && i%7===0){
//         document.write("FizzJazz");
//     }else if(i%5===0 && i%7===0){
//         document.write("BuzzJazz");
//     }else{
//         document.write(i);
//     }
// }

// ------------------------------------------------------------------------------


// ამოცანა 13 მასივის გარეშე — ციფრების ანალიზი

// let n = 9473821;
// let m=n.toString();
// let even=0;
// let odd=0;
// let highest=0;
// let product=1;
// for(let i=0;i<m.length;i++){
//     let num=+m[i];
//     product*=m[i];
//     if(num%2===0){
//         even++;
//     }else if(num%2!==0){
//         odd++;
//     }
// }

// console.log(`There are (${even}) even and (${odd}) odd digits in number (${n})`);

// for(let k=0;k<m.length;k++){
//     let number=+m[k];
//     if(number>highest){
//         highest=number;
//     }
// }
// console.log(`(${highest}) is the largest figure of the number (${n})`);
// console.log(product);

// ---------------------------------------------------------------------------------

// ამოცანა 14 მასივის მანიპულაცია — Running Average

// let temps = [22, 19, 25, 30, 18, 27, 31, 20, 29, 24];
// let total=0;
// let average=0;

// for(let i=0;i<temps.length;i++){
//     total+=temps[i];
//     average=total/temps.length;
// }
// console.log(total);
// console.log(average);

// -----------------------------------------------------------------------------------
// ამოცანა 15 ბინარული გარდაქმნა

// let nums = [5, 13, 42, 7, 100];
// let string=[];

// for(let i =0;i<nums.length;i++){
//    let num=nums[i];
//    let result="";
//    while(num>0){
//     result=(num%2)+result;
//     num=Math.floor(num/2);
//    }
//    string.push(result);
// }
// console.log(string);
