// *Variables*
// Declare a variable, assign it a value, and alert the value
// let g = 10;
// alert(g)

// Create a variable, divide it by 10, and console log the value
let a = 8
a = a / 10;
console.log(a)

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multi(n1,n2,n3){
    alert(n1*n2*n3);
}
multi(4,5,6)
// Create a function that takes in 4 numbers. Add the first two numbers 
// and subtract the next two. Console log the result
function addSub(a,b,c,d){
    let result = a + b - c -d
    console.log(result)
}
addSub(1,2,3,4)
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add
//  the first number, subtract the second, and divide the third.
//  If the value is greater then 25, console log "WE HAVE A WINNNA"

function winnna(a,b,c){
    let result = (100 + a - b) / c 
    if (result > 25){
        console.log("WE HAVE A WINNNA")
    }

}
winnna(34,56,2)
// Create a function that takes in a day of the week. If it is a weekend alert,
//  "weekend" and if not alert "week day". Handle capitilization and if 
// the user does not enter a day of the week alert "Try again!"

function weekEnd(day){
    day = day.toLowerCase()
    if ( day === "saturday" || day === "sunday"){
        alert("weekend");
    }
    else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday"){
        alert('week day')
    }
    else
    alert("Try Again!")
}
weekEnd("Saturday")

//*Loops*
//Create a function that takes in a number. Console log all values 
// from 1 to that number or greater, but count by 3

// psuedoCode:
// the instructions dont make sense, looks to me like it means count by
// threes to infinity. so to console log by threes to the number input.


function countByThrees(n){
  
    for(let i = 1; i <= n; i+=3){
    let a = i - 1
    a = a + 3

    console.log(a)
    }
}
countByThrees(15)