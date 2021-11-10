let count = 0
let countEl = document.getElementById('count-el')
let saver = ''
let saveEl = document.getElementById('save-el')

function increment() {
    count += 1
    countEl.innerText = count 
    // console.log('the button was clicked')
}

function save(){
    // saver = count + ' - '
    saveEl.innerText += count + ' - '
}


function reset() {
    count = 0
    countEl.innerHTML = count 
}

