import list from '../component/list';
import { listData, minUuid } from '../data';
import domManip from '../domManipulation';
import setLogo from '../setIcons';

function listSection() {
  renderLists();
  addNewList();
  deleteList();
}

function renderLists() {
  for (let i = 0; i < listData.length; i++) {
    document
      .querySelector('#lists')
      .appendChild(list(listData[i].title, listData[i].id));
  }
  setLogo();
  deleteList();
}

function addNewList() {
  document.querySelector('#add-new-list-btn').addEventListener('click', () => {
    let input = document.querySelector('#input-list');
    listData.push(createList(input.value));
    input.value = '';
    restartLIsts();
    renderLists();
    domManip.openDetail();
    domManip.closeDetail();
    domManip.deletFromDom();
  });
}

function restartLIsts() {
  document.querySelectorAll('.list').forEach((list) => list.remove());
}

function deleteList() {
  let deleteBtn = document.querySelectorAll('.delete-list');
  deleteBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      let index = listData.map((e) => e.id).indexOf(btn.id);
      if (index > -1) {
        listData.splice(index, 1);
      }
      restartLIsts();
      renderLists();
    });
  });
}

function createList(title) {
  return {
    title: title,
    tasks: [],
    id: minUuid(),
  };
}

export default listSection;
