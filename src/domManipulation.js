const domManip = {
  openDetail: () => {
    let showDetail = document.querySelectorAll('.show-detail');
    showDetail.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.detail').style.display = 'flex';
      });
    });
  },
  closeDetail: () => {
    let closeBtn = document.querySelectorAll('.close-detail');

    closeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelector('.detail').style.display = 'none';
        document.querySelector('.main').style.display = 'grid';
      });
    });
  },

  deletFromDom: () => {
    let btn = document.querySelectorAll('.detail-delete-btn');
    btn.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelector('.detail').style.display = 'none';
        document.querySelector('.main').style.display = 'grid';
      });
    });
  },
  updateDate: () => {
    const today = new Date();
    const dd = today.getDay();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    document.querySelector('#today-date').innerText = `${dd}/${mm}/${yyyy}`;
  },
};

export default domManip;

// export { openDetail, closeDetail, deletFromDom };
