function list(title = 'default list') {
  const list = document.createElement('div');
  const h2 = document.createElement('h2');
  const deleteBtn = document.createElement('button');
  const deleteImg = document.createElement('img');
  const allTasksBtn = document.createElement('button');
  const allTasksimg = document.createElement('img');
  const div = document.createElement('div');

  h2.innerText = title;

  list.classList.add('list');
  deleteBtn.classList.add('delete-list');
  deleteImg.classList.add('trash');
  allTasksBtn.classList.add('show-all-tasks');
  allTasksimg.classList.add('show');

  deleteBtn.appendChild(deleteImg);
  allTasksBtn.appendChild(allTasksimg);
  list.appendChild(h2);
  div.appendChild(deleteBtn);
  div.appendChild(allTasksBtn);
  list.appendChild(div);
  return list;
}

export default list;
