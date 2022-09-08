import task from '../component/task';
import { minUuid, taskData } from '../data';
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
    deleteTask();
  });
}

function renderTasks() {
  for (let i = 0; i < taskData.length; i++) {
    document
      .querySelector('#tasks')
      .appendChild(task(taskData[i].title, taskData[i].id));
  }
  setLogo();
  deleteTask();
  detailPage();
}

function restartTasks() {
  document.querySelectorAll('.task').forEach((task) => task.remove());
}

function deleteTask() {
  const idTasks = taskData.map((p) => p.id);
  idTasks.forEach((id) => {
    let btn = document.getElementById(id);
    btn.addEventListener('click', () => {
      let index = taskData.map((e) => e.id).indexOf(btn.id);
      if (index > -1) {
        taskData.splice(index, 1);
      }
      restartTasks();
      renderTasks();
    });
  });
}

function createTask(title) {
  return {
    title: title,
    date: dateOfTask(),
    detail: '',
    id: minUuid(),
  };
}

function dateOfTask() {
  const today = new Date();
  const dd = today.getDay();
  const mm = today.getMonth() + 1;
  const yy = today.getFullYear();
  const d = `${dd},${mm},${yy}`;
  return d;
}

export default taskspage;
