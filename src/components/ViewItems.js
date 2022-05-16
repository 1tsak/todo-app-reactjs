import React from "react";
import close from "../assets/close.svg";

export default function ViewItems({tasks}) {
  return (
    <div className="flex flex-col  border-t-2 border-slate-600 my-4 align-middle justify-center text-left">
    {
      tasks.map
    }
      <div className="flex flex-row py-2 my-4 px-5 justify-between  bg-slate-200 mx-5">
        <h1 className="w-64">Demo Item</h1>
        <img className="h-4 my-auto cursor-pointer fill-current " src={close} alt="" />
      </div>
      
    </div>
  );
}
