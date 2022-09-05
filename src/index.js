import './styles/main.css';
import taskspage from './pages/tasks';
import list from './component/list';
import { taskData } from './data';
import domManip from './domManipulation';
import setLogo from './setIcons';

taskspage();
document.querySelector('.lists').appendChild(list());
setLogo();
