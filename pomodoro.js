let timer; // Variable to store the timer interval
let timeLeft = 25 * 60; // Initial time is set to 25 minutes (25 * 60 seconds)
let mode = 'work'; // Default mode is work

function updateTimer() {
    // Function to update the displayed timer
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    // Function to start the timer
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    }
}

function pauseTimer() {
    // Function to pause the timer
    if (timer) {
        clearInterval(timer);
        timer = null;
        paused = true; // Variable to track if the timer is paused
    }
}

function resetTimer() {
    // Function to reset the timer to its initial state
    clearInterval(timer);
    timer = null;
    timeLeft = 25 * 60; // Reset time to 25 minutes
    updateTimer();
}

function updateTime() {
    // Function to update the timer countdown
    if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
    } else {
        clearInterval(timer);
        timer = null;
    }
}

function setMode(newMode) {
    // Function to set the timer mode (work, break, longBreak)
    if (newMode === mode) return; // If the new mode is the same as the current mode, do nothing
    mode = newMode; // Update the mode
    clearInterval(timer); // Clear the current timer interval
    timer = null;
    if (mode === 'work') {
        timeLeft = 25 * 60; // Set time for work mode (25 minutes)
    } else if (mode === 'break') {
        timeLeft = 5 * 60; // Set time for break mode (5 minutes)
    } else if (mode === 'longBreak') {
        timeLeft = 15 * 60; // Set time for long break mode (15 minutes)
    }
    updateTimer(); // Update the displayed timer with the new mode
}

updateTimer(); // Initialize the timer display



// ------------------------------TO-DO LIST---------------------------------------
// Add an event listener to execute the code when the DOM content is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
    // Get references to various HTML elements.
    const taskInput = document.getElementById("task"); // Input field for tasks
    const addButton = document.getElementById("addButton"); // Button to add tasks
    const taskList = document.getElementById("taskList"); // List of tasks
    const confetti = document.getElementById("confetti"); // Confetti element

    // Add a click event listener to the "Add" button.
    addButton.addEventListener("click", function () {
        // Get the trimmed value of the task input field.
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            // Display a warning alert if the input is empty.
            alert("Warning: Please enter a task.");
            return; // Exit the function if no task is entered.
        }

        // Create a new list item element and set its text content to the task description.
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Add a click event listener to the task item to toggle a "crossed" class.
        taskItem.addEventListener("click", function () {
            taskItem.classList.toggle("crossed"); // Toggle the "crossed" class.
        });

        // Add a double-click event listener to remove the task item.
        taskItem.addEventListener("dblclick", function () {
            taskList.removeChild(taskItem); // Remove the task item from the list.
            if (taskList.children.length === 0) {
                // If all tasks are completed, display a congratulatory alert and show confetti.
                alert("Congratulations, you have completed all the tasks!");
                confetti.style.display = "block";
            }
        });

        // Add the task item to the task list and clear the input field.
        taskList.appendChild(taskItem);
        taskInput.value = "";
    });

    // Add an event listener for the Enter key to simulate a button click.
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addButton.click(); // Trigger the "Add" button click event when Enter is pressed.
        }
    });
});
