import React, { useState } from "react";

const Input = ({ getData }) => {
  const [inputData, setInputData] = useState("");

  const submitFunction = () => {
    setInputData("");
    getData(inputData);
  };
  return (
    <div>
      <div className="inputDiv">
        <div>
          <input
            value={inputData}
            type="text"
            placeholder="Enter your task"
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div>
          <button className="createBtn" onClick={submitFunction}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
