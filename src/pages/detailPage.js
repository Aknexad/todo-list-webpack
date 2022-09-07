import domManip from '../domManipulation';
import { taskData } from '../data';

function detailPage() {
  openDetailPaage();
}

function openDetailPaage() {
  let showDetail = document.querySelectorAll('.show-detail');
  showDetail.forEach((element) => {
    let getTaskTitle = element.parentElement.parentElement.firstChild.innerText;
    let setTastTitle = document.querySelector('#detail-task-title');
    element.addEventListener('click', () => {
      document.querySelector('.main').style.display = 'none';
      document.querySelector('.detail').style.display = 'flex';
      setTastTitle.innerText = getTaskTitle;
      domManip.closeDetail();
      setDetailDate(getTaskTitle);
      setDetailNote(getTaskTitle);
    });
  });
}

function setDetailDate(taskTitle) {
  let getDate;
  for (let i = 0; i < taskData.length; i++) {
    const element = taskData[i];
    if (element.title === taskTitle) {
      getDate = element.date;
    }
  }
  let getTaskDate = document.querySelector('#detail-task-date');
  getTaskDate.innerText = getDate;
}

function setDetailNote(taskTitle) {
  let getNote;
  for (let i = 0; i < taskData.length; i++) {
    const element = taskData[i];
    if (element.title === taskTitle) {
      getNote = element.detail;
    }
  }
  let getTaskDate = document.querySelector('#note');
  getTaskDate.value = getNote;
}

export default detailPage;
