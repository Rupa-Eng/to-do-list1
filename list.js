// Get the HTML elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim(); // Corrected from ariaValueMax to value
    
    if (taskText !== "") {
        const taskItem = document.createElement('li');
        
        taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class='delete-btn'>Delete</button>`;

        taskList.append(taskItem);

        taskInput.value = "";

        // Add event to the delete button
        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
    }
}

// Function to delete a task
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

// Add event listener to the form
taskForm.addEventListener('submit', addTask);
