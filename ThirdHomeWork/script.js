// // დავალება 1 პაროლის სიმძლავრის შემოწმება

// const name=prompt("Enter your name");
// const pass=prompt("Enter your password").toLocaleLowerCase();
// const length= pass.length;


// if(pass.includes("123" || " ")){
//     const conf=confirm("Are you sure that you want continue")
//     confirm(conf)
//     if (conf===true){
//       console.log(pass)   
//     }else{
//         alert("Process is aborted")
//     }
    

// }else{
//     switch (length) {
//     case length:
//         if(length <6){
//             alert("Password is to weak")
//         }else if(length >6 && length <10){
//             alert("Password is good")
//         }else if(length>10)
//             alert("Password is strong")
        
//         break;

//     default:
//         break;
//       }  
// }

// -----------------------------------------------------

// დავალება 2 დაგენირება

// const num1=Math.round(Math.random()*49);

// const num2=Math.round(Math.random()*49);

// const num3=Math.round(Math.random()*49);

// const num4=Math.round(Math.random()*49);

// const num5=Math.round(Math.random()*49);

// const num6=Math.round(Math.random()*49);


// if(num1==num2 || num1==num3 || num1==num4 || num1==num5 || num1==num6 ||num2==num3 || num2==num4 || num2==num5 || num2==num6 ||num3==num4 || num3==num5 || num3==num6 ||num4==num5 || num4==num6 ||num5==num6){
//     alert("There are same numbers")
// }else if(num1 > 40 || num2 > 40 || num3 > 40 || num4 > 40 || num5 > 40 || num6 > 40){
//     console.log("There are 1 or more numbers which are greater than 40")
// }else{
//     const str1=num1.toString()
//     const str2=num2.toString()
//     const str3=num3.toString()
//     const str4=num4.toString()
//     const str5=num5.toString()
//     const str6=num6.toString()
//     document.write(`${str1}, ${str2}, ${str3}, ${str4}, ${str5}, ${str6}`)
// }

// ------------------------------------------------------------------------------

// დავალება 3 BMI

// alert("Let's find out what is your BMI index")

// const name= prompt("Enter your name");
// const weight=+prompt("Enter yor weight");
// const height=parseFloat(prompt("Enter your height "));

// if(!isNaN(weight) && !isNaN(height)){
//     const bmi= Math.round(((weight/Math.pow(height,2))*10)/10);
//     console.log(bmi);
//     console.log(isFinite(weight),isFinite(height));
//     if(bmi < 18.5){
//         alert("Your weight is to low");
//     }if(bmi > 18.5 && bmi < 24.9){
//         alert("Your weight is normal");
//     }if(bmi > 25 && bmi < 29.9){
//         alert("Overweight");
//     }if(bmi > 30){
//         alert("Obesity");
//     }
    
// }else{
//     alert("Please enter your weight and height in numbers")
// }

// ----------------------------------------------------------------------------------

// დავალება 4 პროდუქტები

// const item =prompt("Enter the item name");
// const price =+prompt("Enter the price");
// const status =prompt("Enter your status").toLocaleLowerCase();


// if(status.includes("premium") || status.includes("standart") || status.includes("guest")){
//     if(!isNaN(price) && price > 0){
//        if(status=="premium"){
//         const pricewithdiscount=price-(price*0.3);
        
//         if(pricewithdiscount > 100){
//             alert("Expensive item");
//             document.write(`${item}, original price: ${price}, discount: ${"30%"}, Price with discount:  ${pricewithdiscount}`);
//         }else{
//             alert("Affordable product")
//             document.write(`${item}, original price: ${price}, discount: ${"30%"}, Price with discount:  ${pricewithdiscount}`);
//         }
//         }if(status=="standart"){
//         const pricewithdiscount=price-(price*0.1);
        
//         if(pricewithdiscount > 100){
//             alert("Expensive item");
//             document.write(`${item}, original price: ${price}, discount: ${"10%"}, Price with discount:  ${pricewithdiscount}`);
//         }else{
//             alert("Affordable product")
//             document.write(`${item}, original price: ${price}, discount: ${"10%"}, Price with discount:  ${pricewithdiscount}`);
//         }
//         }if(status=="guest"){
//         document.write(`${item}, price: ${price}`);
//        }
//       }else{
//         alert("Error")
//        }   
// }else{
//     alert("Please choose the status (premium,standart ot guest)");
// }

// --------------------------------------------------------------------------------

// დავალება 5 საგნის ქულა

// const name=prompt("Enter the name").toLocaleUpperCase();
// const surname=prompt("Enter the surname").toLocaleUpperCase();
// const mathscore=+prompt("Enter the math score");
// const englishscore=+prompt("Enter the english score");
// const itscore=+prompt("Enter the IT score");
// const physicscore=+prompt("Enter the physic score");
// const chemistryscore=+prompt("Enter the chemistry score");

// if(!isNaN(mathscore) && !isNaN(englishscore) && !isNaN(itscore) && !isNaN(physicscore) && !isNaN(chemistryscore)
//     && mathscore >=0 && mathscore <=100 && englishscore >=0 && englishscore <=100 && itscore >=0 && itscore <=100
//     && physicscore >=0 && physicscore <=100 && chemistryscore >= 0 && chemistryscore <=100){
//         const average=(mathscore+englishscore+itscore+physicscore+chemistryscore)/5
//         if(average>90){
//             const score ="A";
//             const first=name.charAt(0);
//             document.write(`Сertificate to ${first}.${surname}, Grade:${score}, Average Score:${average}`);
//         }else if(average >=80 && average <=89){
//             const score="B";
//             const first=name.charAt(0);
//             document.write(`Сertificate to ${first}.${surname}, Grade:${score}, Average Score:${average}`);
//         }else if(average >=70 && average <=79){
//             const score ="C";
//             const first=name.charAt(0);
//             document.write(`Сertificate to ${first}.${surname}, Grade:${score}, Average Score:${average}`);
//         }else if(average>=60 && average <=69){
//             const score="D";
//             const first=name.charAt(0);
//             document.write(`Сertificate to ${first}.${surname}, Grade:${score}, Average Score:${average}`);
//         }else if(average<60){
//             console.warn("the student failed the exam");
//         }
//     }else{
//         alert("Error");
//     }


// --------------------------------------------------------------------------------------

// დავალება 6 ტექსტი და მისი შეცვლა

// const text = prompt("Enter the text").toLocaleLowerCase();
// const num = parseInt(prompt("Enter the number"));

// if(!isNaN(num)){
//     const editedtext=text.replaceAll("a","@").replaceAll("e","3").replaceAll("o","0");
//     const upper=editedtext.toLocaleUpperCase();
//     const pow =Math.pow(num,2);
//     const divide =26;
//     const result = pow / divide;
//     const new1 = result-Math.trunc(result);
//     // const new2 = Number(String(new1).slice(1));
//     console.log(new1);
//     console.log(num);
//     document.write(`${upper}${new1}`);
//     console.log(text);

// }else{
//     alert("Error");
// }