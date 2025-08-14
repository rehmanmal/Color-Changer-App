const color = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#F333FF',
    '#33FFF5',
    '#FFF533',
    '#FF33A8'
]

let currentIndex = 0;

const button = document.getElementById('colorBtn');
button.addEventListener("click",()=>{
    document.body.style.backgroundColor = color[currentIndex]
    currentIndex = (currentIndex + 1) % color.length;
})