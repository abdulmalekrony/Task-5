document.getElementById("discover-btn").addEventListener("click", function () {
    window.location.href = "new.html";
});


const buttons = document.querySelectorAll("#complete-btn");


function updateDateAndTaskOnHand() {
    const date = new Date();

    // Get day name
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    
    // Get formatted date like "Mar 3 2025"
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    document.getElementById("days-of-week").innerText = day;
    document.getElementById("todays-date").innerText = dateStr;

    document.getElementById("task-on-hand").innerText = buttons.length;
}

// Update background color when click theme change btn

document.getElementById("theme-btn").addEventListener("click", function () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// Update task assigned and completed when click on "complete" btn

function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const time = `${hours}:${minutes}:${seconds} ${period}`;
    return time;
}

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
        const taskOnHandConverted = parseInt(
            document.getElementById("task-on-hand").innerText
        );
        const taskCompletedConverted = parseInt(
            document.getElementById("task-completed").innerText
        );

        document.getElementById("task-on-hand").innerText =
            taskOnHandConverted - 1;
        document.getElementById("task-completed").innerText =
            taskCompletedConverted + 1;

        button.disabled = true;
        button.classList.add("cursor-not-allowed");
        button.classList.add("bg-gray-400");
        button.classList.remove("hover:bg-[#1F38D3]");

        // Add activity log
        const parentOfActivity = document.getElementById("activity-log");
        const newActivity = document.createElement("div");
        newActivity.classList.add(
            "bg-[#e7edfc]",
            "p-3",
            "text-xs",
            "rounded-xl",
            "font-semibold"
        );

        // Get the task title
        const title =
            button.parentElement.parentElement.querySelector(
                "#task-title"
            ).innerText;

        newActivity.innerText = `You have Completed The Task ${title} at ${getCurrentTime()} .`;
        parentOfActivity.appendChild(newActivity);

        alert("Board updated successfully!");

        // if all tasks are completed
        if (taskOnHandConverted - 1 === 0) {
            alert("Congrats! You have completed all the current tasks.");
        }
    });
}

// Clear history button

function clearHistory() {
    const parentOfActivity = document.getElementById("activity-log");
    parentOfActivity.innerHTML = "";
}



  