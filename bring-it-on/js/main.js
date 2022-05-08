// *Variables*
// Create a variable and console log the value

let n =10
console.log(n)


// Create a variable, add 10 to it, and alert the value

let x = 20
x = x + 10
alert(x)


// *Functions*
// // Create a function that subtracts 4 numbers and alerts the
//  difference

function sub4(b,c,d,e){
    alert(b - c - d - e)
}

sub4(5,4,3,2)

// // Create a function that divides one number by another and 
// returns the remainder

function getTheRemainder(n1,n2){
    return n1 % n2
}

getTheRemainder(12,3)
// // *Conditionals*
// // Create a function that adds two numbers and if the sum is 
// greater than 50 alert Jumanji

function sum50(n1,n2){
    if (n1 + n2 > 50)
    alert("Jumanji")
}
sum50(50,1)
// // Create a function that multiplys three numbers and if the 
// product is divisible by 3 alert ZEBRA

function multi(a,b,c){
    if ((a * b * c ) % 3 === 0)
    alert('Zebra')
}

multi(3,3,1)

function multiplyThreeAndCheckDivByThree(n1,n2,n3){
    let product = n1 * n2 * n3
    if( product % 3 === 0){
        alert('LeonZebra')
    }
}
multiplyThreeAndCheckDivByThree(3,3,1)
// //*Loops*
// //Create a function that takes in a word and a number. Console log 
// the word x times where x was the number passed in
function logWordXTimes(word,num){
    for(let i = 1; i <= num; i++){
       
        console.log(word)
    }
}
 logWordXTimes("wonderful ",5)