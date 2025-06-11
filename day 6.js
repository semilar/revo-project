document.getElementById('colorbutton').addEventListener('click', () => {
    const box = document.getElementById('colorkotak');
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
    box.textContent = `Color changed to ${randomColor}!`;
});

console.log("hy");
