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

// ------------------------------------------------------------

// 9. row-ების შებრუნება

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// let newmatrix=[];

// for(let i of matrix){
//     let arr=[];
//     for(let j of i){
//         arr.unshift(j);
//     }
//     newmatrix.push(arr);
// }

// console.log(newmatrix);

// ------------------------------------------------------------

// 10. კონკრეტული რიცხვის ძებნა მატრიცაში

// let matrix = [
//   [4, 8, 2],
//   [7, 1, 9],
//   [3, 6, 5]
// ];

// for(let i of matrix){
//     let target=1;
//     if(i.includes(target)){
//         console.log(`The digit ${target} in array:[${i}]`);
//     }else if(i.includes(target)===false){
//         console.log(`There is no ${target} in [${i}]`);
//     }
 
// }

// ----------------------------------------------------------------

// 11. მატრიცის 90°-ით შემობრუნება

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let newmatrix=[];
// let count=0;
// for(let i=0;i<matrix.length;i++){
//     let row=[];
//     for(j of matrix){
//         row.unshift(j[i]);
//     }
//     newmatrix.push(row);
// }
// console.log(newmatrix);

// -------------------------------------------------------------

// 12.row-ების დალაგება ზრდადობით (sort() გარეშე)

// let matrix = [
//   [7, 2, 9],
//   [5, 1, 4],
//   [8, 3, 6]
// ];
// let newmatrix=[];
// for(let i of matrix){
//     let row=i;
//     for(let i=0;i<row.length;i++){
//         for(let j=i+1;j<row.length;j++){
//             if(row[i]>row[j]){
//                 let digit=row[i];
//                 row[i]=row[j];
//                 row[j]=digit;
//             }
//         }
//     }
//     newmatrix.push(row);
// }

// console.log(newmatrix);

// --------------------------------------------------------------------

// 13.მატრიცაში დუბლიკატების პოვნა

// let matrix = [
//   [1, 2, 3],
//   [4, 2, 5],
//   [6, 1, 7]
// ];

// let arr=[];

// for(let j=0;j<matrix.length;j++){
//     for(let h=0;h<matrix.length;h++){
//         let cur=matrix[j][h];
//         for(let x=0;x<matrix.length;x++){
//             for(let y=0;y<matrix[x].length;y++){
//                 if(x===j && y===h) continue;
//                 if(matrix[x][y]===cur){
//                     if(!arr.includes(cur)){
//                         arr.push(cur);
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(arr);

// --------------------------------------------------------------------------

// 14.სპირალურად დაბეჭდვა

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// let result = [];

// let toprow = 0;
// let bottom = matrix.length - 1;
// let left = 0;
// let right = matrix[0].length - 1;

// while (toprow <= bottom && left <= right) {

  
//   for (let i = left; i <= right; i++) {
//     result.push(matrix[toprow][i]);
//   }
//   toprow++;

  
//   for (let i = toprow; i <= bottom; i++) {
//     result.push(matrix[i][right]);
//   }
//   right--;

  
//   if (toprow <= bottom) {
//     for (let i = right; i >= left; i--) {
//       result.push(matrix[bottom][i]);
//     }
//     bottom--;
//   }

  
//   if (left <= right) {
//     for (let i = bottom; i >= toprow; i--) {
//       result.push(matrix[i][left]);
//     }
//     left++;
//   }
// }

// console.log(result);

// --------------------------------------------------------------

// 15.ვარსკვლავების პირამიდა

// let row=5;

// for(let i=0;i<row;i++){
//     let arr=[];
//     for(let j=0;j<i;j++){
//         arr.push("*");
//     }
//     console.log(arr.join(""));
// }


// ----------------------------------------------------------------------------

// 16.მატრიცაში ყველაზე ხშირი რიცხვის პოვნა

// let matrix = [
//   [2, 1, 2],
//   [3, 2, 4],
//   [5, 1, 2]
// ];

// let digit;
// let maxCount = 0;

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {

//     let count = 0;
//     let current = matrix[i][j];

    
//     for (let x = 0; x < matrix.length; x++) {
//       for (let y = 0; y < matrix[x].length; y++) {
//         if (matrix[x][y] === current) {
//           count++;
//         }
//       }
//     }

    
//     if (count > maxCount) {
//       maxCount = count;
//       digit = current;
//     }
//   }
// }

// console.log(digit);

// ---------------------------------------------------------------------

// 17.ორი მატრიცის ერთნაირი პოზიციების პოვნა

// let matrix1 = [
//   [1, 2],
//   [3, 4]
// ];

// let matrix2 = [
//   [1, 5],
//   [6, 4]
// ];

// let count=0;
// for(let i=0;i<matrix1.length;i++){
//     for(let j=0;j<matrix1[i].length;j++){
        
//         let current=matrix1[i][j];
        
//     for(let k=0;k<matrix2.length;k++){
//         for(let h=0;h<matrix2[k].length;h++){
//             if(matrix2[k][h]==current){
//                 count++;
//             }
//         }
//     }
//     }
    
// }
// console.log(count);

// ----------------------------------------------------------------------

// 18.პალინდრომი row-ებში

// let matrix = [
//   [1, 2, 1],
//   [3, 4, 5],
//   [7, 8, 7]
// ];


// for(let i of matrix){
//     let reverse=[];
//     for(let j of i){
//         reverse.unshift(j);
//     }
//     if(i.join("")===reverse.join("")){
//         console.log(`${i} is polyndrom`);
//     }else{
//         console.log(`${i} is not polyndrom`);
//     }
    
// }

// -----------------------------------------------------------------

// 19.მატრიცის border ელემენტების დაბეჭდვა

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ];

// let arr=[];
// for(let i=0;i<matrix[0].length;i++){
//     arr.push(matrix[0][i]);
// }
// for(let i=1; i<matrix.length;i++){
//     arr.push(matrix[i][matrix.length-1]);
// }
// for(let i=matrix.length-2;i>=0;i--) {
//     arr.push(matrix[matrix.length-1][i]);
// }
// for(let i=matrix.length-2;i>0;i--){
//     arr.push(matrix[i][0]);
// }
// console.log(arr);

// ---------------------------------------------------------------------

// 20.X ფორმის ელემენტების დაბეჭდვა

// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12],
//   [13,14,15,16]
// ];
// let arr=[];
// let arr2=[];
// let count=0;
// let xmaker=matrix.length-1;
// for(let i of matrix){
//     arr.push(i[count]);
//     count++;
//     arr2.push(i[xmaker]);
//     xmaker--;
// }

// console.log(arr.concat(arr2));