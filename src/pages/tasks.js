import task from '../component/task';

const arrOfTasks = [
  {
    title: 'testing Task',
    date: '9/4/2022',
    detail: 'this is a testing text ',
  },
];
function taskspage() {
  for (let i = 0; i < arrOfTasks.length; i++) {
    const element = arrOfTasks[i];
    document.querySelector('#tasks').appendChild(task(arrOfTasks[i].title));
  }

  document.querySelector('#add-task').addEventListener('click', () => {
    let input = document.querySelector('#input-task');
    arrOfTasks.push(createTask(input.value));
    input.value = '';
  });

  function createTask(title) {
    return {
      title: title,
      date: Date.now(),
      detail: '',
    };
  }
}

export { taskspage, arrOfTasks };
