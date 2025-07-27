// Sample data for projects and tasks (you can replace this with your own data)
const projectsData = [
    { id: 1, name: 'Project A' },
    { id: 2, name: 'Project B' },
];

const tasksData = [
    { id: 1, projectId: 1, name: 'Task 1', completed: false },
    { id: 2, projectId: 1, name: 'Task 2', completed: true },
    { id: 3, projectId: 2, name: 'Task 3', completed: false },
];

// Function to populate project and task lists
function populateLists() {
    const projectsList = document.getElementById('projects');
    const tasksList = document.getElementById('tasks');

    // Clear existing content
    projectsList.innerHTML = '';
    tasksList.innerHTML = '';

    // Populate project list
    projectsData.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.textContent = project.name;
        projectsList.appendChild(projectItem);
    });

    // Populate task list
    tasksData.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.name + (task.completed ? ' (Completed)' : '');
        tasksList.appendChild(taskItem);
    });
}

// Event listeners for adding projects and tasks
document.getElementById('add-project').addEventListener('click', () => {
    const projectName = prompt('Enter the project name:');
    if (projectName) {
        const newProject = { id: projectsData.length + 1, name: projectName };
        projectsData.push(newProject);
        populateLists();
    }
});

document.getElementById('add-task').addEventListener('click', () => {
    const taskName = prompt('Enter the task name:');
    if (taskName) {
        const projectId = parseInt(prompt('Enter the project ID for the task:'));
        const newTask = { id: tasksData.length + 1, projectId, name: taskName, completed: false };
        tasksData.push(newTask);
        populateLists();
    }
});

// Initial population of lists
populateLists();
