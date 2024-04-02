import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions'; // Importing addTask action
import { IoAdd } from "react-icons/io5";

function TaskInput() {
  const [task, setTask] = useState('');
  const [date,setDate]=useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task,date)); // Dispatching addTask action
      setTask('');
      setDate('');
    }
  };

  return (
    <div className="text-black flex justify-evenly gap-1 px-1">
      <input
        type="text"
        placeholder="Add Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAddTask();
          }
        }} 
     className='w-[40%] h-[2rem] rounded-md pl-4'/>
     <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}  className='w-[20%] h-[2rem] rounded-md px-2 font-semibold'/>
      <button onClick={handleAddTask} className='w-[12%] h-[2rem] rounded-md bg-yellow-500 hover:bg-yellow-600 text-xl flex justify-center items-center'><IoAdd /></button>
    </div>
  );
}

export default TaskInput;
