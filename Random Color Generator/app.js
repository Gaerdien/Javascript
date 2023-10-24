const colors = ["Red", "Green", "Magenta", "Blue", "Purple", "Yellow", "Orange", "Gray"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color"); //The querySelector is a method used to return the first element that matches the especified object inside the (). In this case, there's only one 'color' class.

/*The addEventListener is a method that allows functions to be called only when a certain event happens, like when the user clicks a button*/
btn.addEventListener('click', function(){
    //The objective here is to generate a random number between 0 - 6, because the first object starts at 0.
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    /*Math.random is a method that generates a random number between 0 - 1, but will never be actually 1, going until 0.99999... by multiplying Math.random by the length of the colors array, it turned that now, the random number would be between 0 - 4, but will never actually be 4 and to fix that so it can generate round numbers, we use Math.floor, that no matter what, will round the number generated down, so if the value generated is 1.9, it will be read as 1*/
    return Math.floor(Math.random()*colors.length);
}