const incrementBtn = document.getElementById('increment-btn')
const countDisplay = document.getElementById('count-display')

let currentCount = 0

incrementBtn.addEventListener("click", () => {
    currentCount++
    countDisplay.innerText = currentCount
})