const taskData = [
  {
    title: 'testing task',
    date: Date.now(),
    detail: 'this is a dome text for testing',
  },
];

const listData = [
  {
    title: 'testing list',
    tasks: [taskData[0]],
  },
];

export { taskData, listData };
