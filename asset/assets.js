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





  
