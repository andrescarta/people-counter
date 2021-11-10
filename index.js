// let myAge = 34
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio

let counter = 0


function increment() {
    counter = counter + 1
    document.getElementById('count').innerHTML = counter 
    console.log('the button was clicked')
}

function reset() {
    counter = 0
    document.getElementById('count').innerHTML = counter 
}
