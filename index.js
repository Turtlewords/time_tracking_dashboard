
const containers = document.querySelectorAll(".container");


const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");

daily.addEventListener("click", () => {
    daily.classList.add("white");
    weekly.classList.remove("white");
    monthly.classList.remove("white")
    displayDaily();
});


weekly.addEventListener("click", () => {
    daily.classList.remove("white");
    weekly.classList.add("white");
    monthly.classList.remove("white")
    displayWeekly();
});


monthly.addEventListener("click", () => {
    daily.classList.remove("white");
    weekly.classList.remove("white");
    monthly.classList.add("white")
    displayMonthly();
});


function displayDaily() {

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
            const title = container.querySelector(".title");

            current.textContent = data[index].timeframes.daily.current + "hrs";
            prev.textContent = "Yesterday - " + data[index].timeframes.daily.previous + "hrs";
            title.textContent = data[index].title
            index++;
        }) 
    })

}

function displayWeekly() {

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
            const title = container.querySelector(".title");

            current.textContent = data[index].timeframes.weekly.current + "hrs";
            prev.textContent = "Last week - " + data[index].timeframes.weekly.previous + "hrs";
            title.textContent = data[index].title
            index++;
        }) 
    })

}

function displayMonthly() {

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
            const title = container.querySelector(".title");

            current.textContent = data[index].timeframes.monthly.current + "hrs";
            prev.textContent = "Last month - " + data[index].timeframes.monthly.previous + "hrs";
            title.textContent = data[index].title
            index++;
        }) 
    })

}



displayDaily();
