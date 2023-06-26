let span = document.getElementById("span");
let text = "FrontEnd Developer";
let counter = 0;
let uniqueId = setInterval(() => {
    span.textContent += text[counter];

    counter = counter + 1;
    if (counter === text.length) {
        clearInterval(uniqueId);
    }
}, 200);