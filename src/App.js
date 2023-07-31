import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./component/Input";
import List from "./component/List";
import { api } from "./Api/api";
import uuid from "react-uuid";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const res = await api.get("/todolist");
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [data]);

  const getData = async (inputData) => {
    const newData = {
      title: inputData,
      id: uuid(),
      complete: false,
    };
    await api.post("/todolist", newData);
  };

  const deleteData = async (id) => {
    if (window.confirm("Are you Sure?")) {
      await api.delete("/todolist/" + id);
    }
  };

  return (
    <div className="div">
      <h1 className="title">React To Do List Project</h1>
      <Input getData={getData} />
      <List data={data} deleteData={deleteData} />
    </div>
  );
};

export default App;
