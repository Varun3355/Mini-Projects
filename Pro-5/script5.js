const container = document.getElementById('container')
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = `rgb(15, 14, 14)`
    element.style.boxShadow = `0 0 2px rgb(41, 37, 37)`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}