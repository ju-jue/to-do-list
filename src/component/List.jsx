import React from "react";
import Card from "./Card";

const List = ({ data, deleteData }) => {
  return (
    <div className="workLists">
      <h2 className="title2">Your Work Lists</h2>
      <Card data={data} deleteData={deleteData} />
    </div>
  );
};

export default List;
