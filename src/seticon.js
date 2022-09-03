import sun from './imge/sun.png';
import close from './imge/close.png';
import star from './imge/star.png';
import show from './imge/show.png';
import home from './imge/home.png';
import trash from './imge/trash.png';
import done from './imge/done.png';

setLogo('.sun', sun);
setLogo('.close', close);
setLogo('.star', star);
setLogo('.show', show);
setLogo('.home', home);
setLogo('.trash', trash);
setLogo('.done', done);

function setLogo(clas, path) {
  document.querySelectorAll(clas).forEach((element) => {
    element.setAttribute('src', path);
  });
}
