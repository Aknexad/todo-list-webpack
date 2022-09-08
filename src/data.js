import { v4 as uuidv4 } from 'uuid';

const taskData = [
  {
    title: 'testing task',
    date: Date.now(),
    detail: 'this is a dome text for testing',
    id: '01',
  },
];

const listData = [
  {
    title: 'testing list',
    tasks: [taskData[0]],
    id: '01',
  },
];

function minUuid() {
  let id = uuidv4();
  return id.substring(0, 6);
}

export { taskData, listData, minUuid };
