const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    let hexColor = '#';
    /*This for Loop means that i = 0, and it will run 5 times from zero, generating 6 numbers, and each time the loop runs and doesn't have 6 digits, it will add one more random digit 'i++' */
    for (let i = 0; i < 6; i++){
        /*The randomNumber function has to be invoked for it to work on oour loop, so don't forget to add the () at the end, meaning it's a function and not just some random value*/
        hexColor += hex [randomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomNumber() {
    return Math.floor(Math.random() * hex.length);
}
