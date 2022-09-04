function openDetail() {
  let showDetail = document.querySelector('#show-detail');
  showDetail.addEventListener('click', () => {
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.detail').style.display = 'flex';
  });
}
function closeDetail() {
  let closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', () => {
    document.querySelector('.detail').style.display = 'none';
    document.querySelector('.main').style.display = 'grid';
  });
}

function deletFromDom() {
  let btn = document.querySelector('#detail-delete-btn');
  btn.addEventListener('click', () => {
    document.querySelector('.detail').style.display = 'none';
    document.querySelector('.main').style.display = 'grid';
  });
}

export { openDetail, closeDetail, deletFromDom };
