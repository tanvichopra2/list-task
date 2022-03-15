import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lists from "./components/Lists.js";
import Tasks from "./components/Tasks.js";
function App() {
  const dummyData = [
    {
      id: 1,
      name: "Self Learning",
      tasks: [
        {
          id: 1,
          title: "walk",
        },
        {
          id: 2,
          title: "prep your meals",
        },
        {
          id: 3,
          title: "meditate",
        },
      ],
    },
    {
      id: 2,
      name: "Self Learning 2",
      tasks: [
        {
          id: 1,
          title: "walk 2",
        },
        {
          id: 2,
          title: "prep your meals 2",
        },
        {
          id: 3,
          title: "meditate 2",
        },
      ],
    },
  ];
  const [data, setData] = useState(dummyData);
  const getAllLists = () => {
    return data.map((list) => {
      return {
        id: list.id,
        name: list.name,
      };
    });
  };
  const getListData = (id) => {
    return data.filter((list) => list.id === parseInt(id))[0];
  };
  const addList = (name) => {
    const obj = { id: data.length + 1, name: name, tasks: [] };
    const newData = [...data, obj];
    setData(newData);
    return obj;
  };
  const addTask = (listId, title) => {
    const newData = data.map((list) => {
      if (list.id === listId) {
        list.tasks.push({ id: list.tasks.length + 1, title: title });
      }
      return list;
    });
    setData(newData);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Lists getAllLists={getAllLists} addList={addList} />}
        ></Route>
        <Route
          path={`/list/:id`}
          element={<Tasks getListData={getListData} addTask={addTask} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;