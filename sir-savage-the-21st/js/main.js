//Create a function that has a loop that prints '21' 21 times to the
//  console and then call that function



// function print21(n){
//     for(let i = 1; i <= n; i++){
//         document.querySelector("#savageSays").innerText = n
//         console.log(n)
//     }
// }
// console.log(print21(21))

//Bonus can you make it print '21' 21 times to the dom?

function savage21(){
    for(let i = 1; i < 22; i++){
        document.querySelector("#savageSays").innerText += " 21"
    }
}
savage21()
