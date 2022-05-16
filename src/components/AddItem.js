import React from "react";

export default function AddItem() {
  return (
    <div className="flex flex-col justify-center font-sans py-2">
      <div className="name flex flex-col justify-center py-4 px-5">
        <label className="font-serif" htmlFor="name-input">
          Name
        </label>
        <input
          className="border-2 py-2 border-blue-400"
          id="name-input"
          type="text"
        ></input>
      </div>
      <div className="name flex flex-col justify-center py-5 px-5">
        <label className="font-serif" htmlFor="desc-input">
          Description
        </label>
        <input
          className="border-2 py-2 border-blue-400"
          id="desc-input"
          type="text"
        ></input>
      </div>
      <div className="actions flex justify-center space-x-5">
        <button className="bg-blue-500 py-2 px-4 text-white">Add</button>
        <button className="bg-blue-500 py-2 px-4 text-white">Update</button>
      </div>
    </div>
  );
}
