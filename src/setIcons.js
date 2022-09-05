import sun from './imge/sun.png';
import close from './imge/close.png';
import star from './imge/star.png';
import show from './imge/show.png';
import home from './imge/home.png';
import trash from './imge/trash.png';
import done from './imge/done.png';

function setLogo() {
  const logoClass = [
    '.sun',
    '.close',
    '.star',
    '.show',
    '.home',
    '.trash',
    '.done',
  ];
  const logoPath = [sun, close, star, show, home, trash, done];

  for (let i = 0; i < 8; i++) {
    document.querySelectorAll(logoClass[i]).forEach((element) => {
      element.setAttribute('src', logoPath[i]);
    });
  }
}

export default setLogo;
