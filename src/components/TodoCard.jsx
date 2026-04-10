import React from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md'

const TodoCard = ({data, onDelete, onChecked, checked}) => {
  return (
      <div  className="flex items-center justify-between w-80 mx-auto mt-5 bg-blue-200 p-3 rounded-lg mb-3" >
       <span className={checked ? "line-through" : ""}>{data}</span>
    <div className="flex items-center gap-3">
     <button onClick={() => onChecked(data)} className="appearance-none flex items-center justify-center h-10 w-10 bg-green-500 text-white rounded-full">
     <MdCheck />
    </button>
   <button 
   // ya jo data hum ne argoment pass kiya howa h ya is k liy h k hum ne delete krny k liy kis item pe click kiya h usy tagle krta h
    onClick={()=>onDelete(data)} 
    className="h-10 w-10 bg-red-400 text-white rounded-full flex items-center justify-center ">
    <MdDeleteForever />
  </button>
</div>
 </div>
  );
};

export default TodoCard;
