import React from "react";
import AddItem from "./AddItem";
import ViewItems from "./ViewItems";

export default function Body({tasks}) {
  return (
    <>
      <AddItem />
      <ViewItems tasks={tasks} />
    </>
  );
}
