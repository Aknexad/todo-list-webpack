function list() {
  const list = document.createElement('div');
  const h2 = document.createElement('h2');
  const deleteBtn = document.createElement('button');
  const deleteImg = document.createElement('img');

  h2.innerText = 'list from js';

  list.classList.add('list');
  deleteBtn.classList.add('delete-list');
  deleteImg.classList.add('trash');

  deleteBtn.appendChild(deleteImg);
  list.appendChild(h2);
  list.appendChild(deleteBtn);

  return list;
}

export default list;
