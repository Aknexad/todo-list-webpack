import task from '../component/task';
import { taskData } from '../data';
import setLogo from '../setIcons';
import domManip from '../domManipulation';
import detailPage from './detailPage';

function taskspage() {
  renderTasks();
  document.querySelector('#add-task').addEventListener('click', () => {
    let input = document.querySelector('#input-task');
    taskData.push(createTask(input.value));
    input.value = '';
    restartTasks();
    renderTasks();
  });
}

function renderTasks() {
  for (let i = 0; i < taskData.length; i++) {
    document.querySelector('#tasks').appendChild(task(taskData[i].title));
  }
  setLogo();
  detailPage();
}

function restartTasks() {
  document.querySelectorAll('.task').forEach((task) => task.remove());
}

function createTask(title) {
  return {
    title: title,
    date: dateOfCreated(),
    detail: '',
  };
}

function dateOfCreated() {
  const today = new Date();
  const dd = today.getDay();
  const mm = today.getMonth() + 1;
  const yy = today.getFullYear();
  const d = `${dd},${mm},${yy}`;
  return d;
}

export default taskspage;
