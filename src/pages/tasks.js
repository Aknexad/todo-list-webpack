import task from '../component/task';
import { taskData } from '../data';
import setLogo from '../setIcons';
import domManip from '../domManipulation';

function taskspage() {
  renderTasks();
  document.querySelector('#add-task').addEventListener('click', () => {
    let input = document.querySelector('#input-task');
    taskData.push(createTask(input.value));
    input.value = '';
    deleteTask();
    renderTasks();
  });
}

function renderTasks() {
  for (let i = 0; i < taskData.length; i++) {
    document.querySelector('#tasks').appendChild(task(taskData[i].title));
  }
  setLogo();
}

function deleteTask() {
  document.querySelectorAll('.task').forEach((task) => task.remove());
}

function createTask(title) {
  return {
    title: title,
    date: Date.now(),
    detail: '',
  };
}

export default taskspage;
