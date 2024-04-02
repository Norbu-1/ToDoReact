import React, { useState } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import { RiCalendarTodoFill } from "react-icons/ri";
const App = () => {
const [play,setPlay]=useState(false);

const handlePlay=(data)=>{
  setPlay(data);
}
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-indigo-600 to-yellow-200 font-[poppins] text-white">
     
      <div className="w-[60%] h-[32rem] rounded-lg shadow-md bg-indigo-700 text-center">
      <h1 className=" font-bold text-xl md:text-4xl py-10 flex justify-center items-center gap-1">TO DO LIST <RiCalendarTodoFill /></h1>
        <TaskInput />  
        <hr className="w-[95%] mx-auto mt-4" />
       <p className="flex justify-center gap-1 text-black"> <button className=" font-semibold text-sm md:text-lg mt-4 bg-white hover:bg-slate-300 rounded-l-md w-[30%] h-[2rem] pt-1" onClick={()=>handlePlay(true)}>View Task</button> <button className=" font-semibold text-sm md:text-lg mt-4 hover:bg-slate-300 bg-white rounded-r-md w-[30%] h-[2rem] pt-1" onClick={()=>handlePlay(false)}>View Close</button></p>
        {play? <p className=" overflow-y-auto h-[50%] mt-4 w-full"><TaskList /></p>:""}  
      </div>
    </div>
  );// here is the logic to display task or not
        
};

export default App;
