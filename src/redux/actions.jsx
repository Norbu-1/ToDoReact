export const addTask = (text,date) => ({
    type: 'ADD_TASK',
    payload: {
      id: Math.random(),
      text,
      date
    },
  }); // two actions adding and deletion
  
  export const deleteTask = (taskId) => ({
    type: 'DELETE_TASK',
    payload: {
      id: taskId,
    },
  });
  