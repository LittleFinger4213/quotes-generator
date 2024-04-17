let quote = "";
let textPosition = 0;
let flag = true;
let destination = document.getElementById("typed-text");

window.addEventListener("DOMContentLoaded", typewriter);
//window.addEventListener("load", typewriter);
// function loadQuote() {
//     const url = "https://api.quotable.io/random";
//     fetch(url)
//
//     .then(response => {
//         if(response.ok) return response.json();
//         else console.log(response.status);
//     })
//
//     .then(data => {
//        quoteArray[index] = data.content;
//     })
// }

function loadQuote() {
    const url = "https://api.quotable.io/random";

    fetch(url)
        .then(response => {
            if(response.ok) return response.json();
            else console.log(response.status);
        })
        .then(data => {
            quote = data.content;
        });
}

function typewriter() {
    if (flag) {
        loadQuote();
        flag = false;
    }
    destination.innerHTML = quote.substring(0, textPosition) + ' ' + '<span>\u25AE<span/>';
    if(textPosition++ !== quote.length) {
        setTimeout(typewriter, 50);
    }
    else {
        quote = " ";
        setTimeout(typewriter, 1000);
        textPosition = 0;
        flag = true;
    }
}

