// This module is for storing and modifying projects
const projectsList = [];

// A Project is composed of a name and a collection of todos
const Project = (name, isSelected) => {
    const todos = [];
    const assignTodo = todo => todos.push(todo);
    const replaceTodoAtIndex = (newTodo, indexToReplace) => todos.splice(indexToReplace, 0, newTodo);
    const removeTodo = index => todos.splice(index, 1);
    return {name, todos, isSelected, assignTodo, removeTodo, replaceTodoAtIndex};
};

const addProject = (name, todos, isSelected) => {
    let project = Project(name, todos, isSelected);
    projectsList.push(project);
    return project;
};

const selectProject = (project) => {
    // Deselect all projects
    projectsList.forEach(item => item.isSelected = false);
    // Select particular project
    project.isSelected = true;
};

// Initial setup of todo list, runs for first-time users
const initializeProjectsList = () => {
    addProject('default', true);
};

export {addProject, initializeProjectsList, selectProject, projectsList};