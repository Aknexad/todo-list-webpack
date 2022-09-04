function task(title = 'testing') {
  const task = document.createElement('div');
  const h2 = document.createElement('h2');
  const div = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const detailBtn = document.createElement('button');
  const importantBtn = document.createElement('button');
  const deleteImg = document.createElement('img');
  const detailImg = document.createElement('img');
  const importantImg = document.createElement('img');

  h2.innerText = title;

  task.classList.add('task');
  deleteImg.classList.add('trash');
  detailImg.classList.add('show');
  importantImg.classList.add('star');

  deleteBtn.appendChild(deleteImg);
  detailBtn.appendChild(detailImg);
  detailBtn.id = 'show-detail';

  importantBtn.appendChild(importantImg);

  div.appendChild(deleteBtn);
  div.appendChild(detailBtn);
  div.appendChild(importantBtn);

  task.appendChild(h2);
  task.appendChild(div);

  return task;
}

export default task;
