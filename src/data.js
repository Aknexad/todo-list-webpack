const taskData = [
  {
    title: 'testing task',
    date: Date.UTC(),
    detail: 'testin note for task',
  },
];

const listData = [
  {
    title: 'testing list',
    tasks: [taskData[0]],
  },
];

export { taskData, listData };
