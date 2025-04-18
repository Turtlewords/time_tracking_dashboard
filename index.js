const workCurrent = document.querySelector("work-current");
const workPrev = document.querySelector("work-prev");
const playCurrent = document.querySelector("play-current");
const playPrev = document.querySelector("play-prev");
const studyCurrent = document.querySelector("study-current");
const studyPrev = document.querySelector("study-prev");
const exerciseCurrent = document.querySelector("exercise-current");
const exercisePrev = document.querySelector("exercise-prev");
const socialCurrent = document.querySelector("social-current");
const socialPrev = document.querySelector("social-prev");
const selfCurrent = document.querySelector("self-care-current");
const selfPrev = document.querySelector("self-care-prev");
const containers = document.querySelectorAll(".container");


const daily = document.querySelector("daily");
const weekly = document.querySelector("weekly");
const monthly = document.querySelector("monthly");

function initialize() {

    fetch("data.json").then((response) => {
        if(!response.ok) {
            throw new Error("Could not retrieve data.")
        }
        return response.json();
    }).then(data => {
        let index = 0;
        containers.forEach((container) => {

            const current = container.querySelector(".current");
            const prev = container.querySelector(".prev");

            current.textContent = data[index].timeframes.daily.current + " hrs";
            prev.textContent = data[index].timeframes.daily.previous + " hrs";
            index++;
        }) 
    })

}




initialize();
console.log(containers)