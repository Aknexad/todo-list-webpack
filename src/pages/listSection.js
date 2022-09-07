import list from '../component/list';
import { listData } from '../data';
import domManip from '../domManipulation';
import setLogo from '../setIcons';

function listSection() {
  renderLists();
  addNewList();
}

function renderLists() {
  for (let i = 0; i < listData.length; i++) {
    document.querySelector('#lists').appendChild(list(listData[i].title));
  }
  setLogo();
}

function addNewList() {
  document.querySelector('#add-new-list-btn').addEventListener('click', () => {
    let input = document.querySelector('#input-list');
    listData.push(createList(input.value));
    input.value = '';
    deleteList();
    renderLists();
    domManip.openDetail();
    domManip.closeDetail();
    domManip.deletFromDom();
  });
}

function deleteList() {
  document.querySelectorAll('.list').forEach((list) => list.remove());
}

function createList(title) {
  return {
    title: title,
    tasks: [],
  };
}

export default listSection;
