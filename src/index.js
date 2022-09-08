import './styles/main.css';
import taskspage from './pages/tasks';
import setLogo from './setIcons';
import listSection from './pages/listSection';
import domManip from './domManipulation';

listSection();
taskspage();
setLogo();

domManip.updateDate();
