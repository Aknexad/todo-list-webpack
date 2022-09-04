import './styles/main.css';
import { taskspage } from './pages/tasks';
import list from './component/list';

taskspage();

document.querySelector('.lists').appendChild(list());
