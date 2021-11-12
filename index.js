let count = 0
let countEl = document.getElementById('count-el')
let total = 0
let saveEl = document.getElementById('save-el')
let totalEl = document.getElementById('total-el')

function increment() {
    count += 1
    countEl.textContent = count 
}

function decreace() {
    count -= 1
    countEl.textContent = count
} 

function save(){
    saveEl.textContent += count + ' - '
    total = total + count
    totalEl.textContent = 'TOTAL: ' + total
    count = 0
    countEl.textContent = count 
}

