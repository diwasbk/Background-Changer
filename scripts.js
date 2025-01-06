// Generate a random color
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Change the background to a random gradient
const changeBackground = () => {
    const color1 = randomColor();
    const color2 = randomColor();
    document.body.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
};

let intervalId;
// Start button functionality
document.querySelector("#start").addEventListener("click", () => {
    intervalId = setInterval(()=>{
        changeBackground();
    }, 100);
});

// Stop button functionality
document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(intervalId);
});