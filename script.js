                 // console.log("Practice of JS Coding Questions")

 // Question No-01 -- Write a programe to print Hello world in console

//  console.log("Hello World"); 
 

//  -- Question NO -02 
// Write a function that takes two numbers as input and print their sum

// function sum(a,b){
//     return a+b
// }

// let result=sum(3,5)
// console.log("Sum is ",result);



//  Question No -03

// -- Find the rectangle of an given area

// function rectangleFind(length,width){
//     if (length || width<=0) {
//         console.log("value should be positive");
    
//     }
//     else{
// return length*width
//     }

// }

// let result=rectangleFind(-5,6)
// console.log(result);



        //   -- Question No-04 
    // -- Write a function which takes input and find even or odd number

// function isEven(num){

//     if(num<0){
//         console.log("Don't put negative number");
//         return;
        
//     }
//     if (num%2 === 0) {
//         console.log(num,"is even");
        
//     }
//     else{
//         console.log(num,"is odd");
        
//     }
// }
// isEven(22)


    // -- Question No-05

// -- Write a function that finds and prints the smallest number among three given input numbers

// function findSmallestNum(a,b,c){
// if (a<b && a<c){
//     console.log("a is smallest number");
    
// }
// else if(b<c && b<a){
//     console.log("B is smallest number");
    
// }

// else{
//     console.log("c is smallest number");
    
// }
// }

// findSmallestNum(3,1,5)


// --- Second Method---

// function  smallestNo(a,b,c) {
    
//     let smallest=a;
//     if(smallest<b && smallest<c){
//         console.log(smallest,"is small number");
        
//     }
   
//    else if(b<smallest && b<c) {
//     console.log(b," is smallest"); 
//    }
//    else{
//     console.log(c," is smallest");
    
//    }
// }

// smallestNo(4,5,3)




    //  -- Question No -06

//    --- //  Write a function to reverse a string

// function reverseString(inputString){
        
//     let reversedValue=""
//     if(typeof inputString !== "string"){
//         console.log("Enter only string");
//         return;
//     }

// for(let i=inputString.length-1; i>=0; i--){
// reversedValue=reversedValue+inputString[i]
// }
// console.log(reversedValue);

// }
// reverseString("Ankit")




//Second Method of reverse a string

// let str="Ankit Mishra" 
// let reversedValue=str.split('').reverse().join('').replaceAll(' ','')
// console.log(reversedValue);





     // Question NO -07
  

    //  -- Map function always return a new array

// let arr=[1,3,7,5]
// let result=arr.map((square)=>{
// return square*square
// })

// console.log(result);

// console.log(arr);


// -- ForEach do not return anything ,so always try to console it.


// let result=arr.forEach((square)=>{
// console.log(square*square)
// })
  
// -- find method finds the first element which meets the condition

// let result=arr.find((num)=>{
// return num%2==0
// })

// console.log(result);


//  FindIndex function find the index of the given logic.

// let result=arr.findIndex((n)=>{
//     return n%2===0
// })
// console.log(result);

 // --  For Some function ,will return true even at least one  element will follow the condition of code

// let result=arr.some((n)=>{
//     return n%2==0
// })

// console.log(result);



// --  For Every function ,will return true when all elements will follow the condition of code
// let Arr=[1,2,4,6]
// let result=Arr.every((n)=>{
// return n%2==0
// })
// console.log(result);



// --  Filter Method

// let arr=[1,2,3,4,5,6,7,8]

// // let pushedNewArr=[]

// let result=arr.filter((n)=>{

// return n%2==0

// })

// console.log(result);


// ----Reduce Method

// -- It will return only a single value 
// let arr=[1,2,4,56,7]

// let result=arr.reduce((acc,value)=>{
// // let updatedValue=acc*value
// let updatedValue=acc-value
// return updatedValue
// },0)

// console.log(result);

// let sum = 0;
// let arr = [10,15,20,30];  
// arr.forEach(function myFunction(element)
//  {  
//     sum = sum + element; 

//   });  
// console.log(sum);


// ---- Question No-08

// ----Find the factorial of a number

function factorialCalculate(inputNumber){
let result=1;
    for(let i=1; i<=inputNumber; i++){
        result=result*i
        
    }
      return result
}

console.log(factorialCalculate(5))


// ----Question No=09

// --Find the sum of all elements in an Array

// let arr=[2,3,5,6,8]

// function findSum(inputArray){
// let sum=0;
// for(let i=0; i<inputArray.length; i++){
//     sum+=inputArray[i]
// }
// return sum;
// }

// console.log(findSum(arr))