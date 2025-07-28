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

function findSmallestNum(a,b,c){
if (a<b && a<c){
    console.log("a is smallest number");
    
}
else if(b<c && b<a){
    console.log("B is smallest number");
    
}

else{
    console.log("c is smallest number");
    
}
}

findSmallestNum(3,1,5)