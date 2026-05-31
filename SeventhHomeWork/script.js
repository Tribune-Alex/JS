// 1. მატრიცაში ყველაზე დიდი რიცხვის პოვნა

// let matrix = [
//   [12, 4, 9],
//   [33, 7, 15],
//   [2, 18, 25]
// ];
// let max=0;
// let digit=0;

// for(let num of matrix){
//     for(let dig of num){
//         if(dig>max){
//         max=dig;
//         digit=dig;
//     }
//     }  
// }
// console.log(digit);

//------------------------------------------------------------------- 

// 2. თითოეულ row-ში ყველაზე პატარა რიცხვის პოვნა

// let matrix = [
//   [8, 2, 6],
//   [14, 1, 11],
//   [9, 5, 1]
// ];



// for(let num of matrix){
//      let minvalue=Infinity;
//     for(let dig of num){
//         if(dig<minvalue){
//             minvalue=dig;
            
            
           
//         }
// }
// console.log(minvalue);
// }

// ------------------------------------------------------------------------

// 3. მატრიცის შებრუნებული დაბეჭდვა

// let matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let newmatrix=[];

// for(let num of matrix){
//     newmatrix.unshift(num);
   
// }
//  console.log(newmatrix);

// --------------------------------------------------------------------------------

// 4. ყველა ელემენტის 2-ზე გამრავლება

// let matrix = [
//   [3, 5],
//   [7, 9]
// ];

// let newmatrix=[];
// for(let num of matrix){
//     let row=[];
//     console.log(row);
//     for(let double of num){
//         row.push(double*2);
//     }
//     newmatrix.push(row);
// }

// console.log(newmatrix);

// --------------------------------------------------------------------------

// 5. დიაგონალის ელემენტების დაბეჭდვა


// let matrix = [
//   [4, 1, 7],
//   [2, 9, 6],
//   [5, 8, 3]
// ];
// let arr=[];
// let count=0;
// for(let num of matrix){
//     arr.push(num[count]);
//     count++;
// }

// console.log(arr);

// --------------------------------------------------------------------

// 6. row-ების მიხედვით ყველაზე დიდი რიცხვის პოვნა

// let matrix = [
//   [2, 18, 7],
//   [15, 1, 20],
//   [6, 11, 5]
// ];

// for(let row of matrix){
//     let maxdigit=0;
//     for(let digit of row){
//         if(digit>maxdigit){
//             maxdigit=digit;
//         }
//     }
//     console.log(maxdigit);
// }

// ------------------------------------------------------------------

// 7. ტექსტის სამკუთხედად დაბეჭდვა

// let word = "CODE";
// let tringle="";
// for(let letter of word){
//     tringle+=letter;
//     console.log(tringle);
// }

// ---------------------------------------------------------------------

// 8. მატრიცის ტრანსპონირება

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// let newmatrix=[];
// for(let i=0;i<matrix[0].length;i++){
//     let row=[];
//     for(let j of matrix){
//         row.push(j[i]);
//     }
//     newmatrix.push(row);
// }

// console.log(newmatrix);







