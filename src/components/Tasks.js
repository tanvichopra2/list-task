import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Tasks = ({ getListData, addTask }) => {
    const { id } = useParams();
    const [list, setList] = useState(getListData(id));
    const [newTask, setNewTask] = useState("");
    const addToList = () => {
        addTask(newTask);
        setList((oldList) => ({
            ...oldList,
            tasks: [
                ...oldList.tasks,
                { id: oldList.tasks.length + 1, title: newTask },
            ],
        }));
        setNewTask("");
    };
    return list ? (
        <div>
            <h2>
                {list.id} {list.name}
            </h2>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addToList}>Add to List</button>
            {list.tasks.map((task, index) => (
                <p key={index}>
                    {task.id}. {task.title}
                </p>
            ))}
        </div>
    ) : (
        <div>List doesn't exist</div>
    );
};
export default Tasks;
