import React from "react";
import { BiTrash } from "react-icons/bi";

const Card = ({ data, deleteData }) => {
  return (
    <div>
      <div className="card">
        {data.map((task, index) => (
          <div key={task.id} className="lists">
            <div>
              <p>{task.title}</p>
            </div>
            <div className="btn">
              <BiTrash onClick={() => deleteData(task.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
