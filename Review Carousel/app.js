// local data for the reviews here:
const reviews = [
    {
        id: 1,
        name: "Andrea Karen",
        job: "Web Developer",
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at ad reiciendis nesciunt illum quisquam quam similique aliquam, voluptate necessitatibus.",
    },
    {
        id: 2,
        name: "Ezra Garcia",
        job: "UX Developer",
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at ad reiciendis nesciunt illum quisquam quam similique aliquam, voluptate necessitatibus.",
    },
    {
        id: 3,
        name: "John Weber",
        job: "Web Designer",
        img: "https://www.course-api.com/images/people/person-4.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at ad reiciendis nesciunt illum quisquam quam similique aliquam, voluptate necessitatibus.",
    },
    {
        id: 4,
        name: "Will Smith",
        job: "Web Developer",
        img: "https://www.course-api.com/images/people/person-3.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at ad reiciendis nesciunt illum quisquam quam similique aliquam, voluptate necessitatibus.",
    }
]

// select items that will be used from the HTML here:
const img = document.getElementById('img-one');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set the starting item here:
let currentItem = 0;

// load the initial item:

// DOMContentLoaded is a event that fires a value once the HTML is completely loaded.
window.addEventListener('DOMContentLoaded', function () {
    // here we are acessing the reviews array. Since we have a hard coded value in the currentItem, we will acess the first item.
    showPerson(currentItem);
})

// instead of using the entire method inside each and every event, we create a function that can be called whenever we want.
function showPerson (person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// next person button event
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

//previous person button event
prevBtn.addEventListener('click', function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// random person in the reviews
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);
})