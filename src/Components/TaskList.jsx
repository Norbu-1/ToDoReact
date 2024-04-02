import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import { MdDeleteForever } from "react-icons/md";
function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch(); 

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); //sending id of task for deletion
  };

  return (
    <ul className="text-black">
      
      {tasks.map((task) => ( //fetching of is task and date from store
        <li key={task.id} className='flex justify-evenly pt-6 w-full'>
         <p className='w-[40%] h-[2rem] rounded-md pl-4 bg-white pt-1'>{task.text}</p> 
         <p className='w-auto  h-[2rem] rounded-md px-[5%] font-semibold bg-white pt-1'>{task.date}</p>
          <button onClick={() => handleDeleteTask(task.id)} className='w-[12%] h-[2rem] rounded-md bg-red-500 hover:bg-red-600 text-xl flex justify-center items-center'><MdDeleteForever /></button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
