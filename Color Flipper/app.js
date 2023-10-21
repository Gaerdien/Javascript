let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// will generate a NodeList that is like an array, so you can use array methods.

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const style = e.currentTarget.classList;
        if(style.contains('decrease')) {
            count--;
        }
        else if(style.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    })
})

// in the function with (e), (e) means event object.
// e.currentTarget.classList = the event object's Current target and will display all of the classes that object has.