import React, { useState } from "react";
import { Link } from 'react-router-dom'
const Lists = ({ getAllLists, addList }) => {
    const [lists, setLists] = useState(getAllLists())
    const [newList, setNewList] = useState("")
    const addToLists = () => {
        const listItem = addList(newList)
        setLists(data => [...data, listItem])
        setNewList('')
    }
    return (
        <div>
            <input type="text" value={newList} onChange={(e) => setNewList(e.target.value)} />
            <button onClick={addToLists}>Add to List</button>
            {
                lists.map((list, i) => {
                    return (
                        <div key={i}>
                            <Link to={`list/${list.id}`} >
                                <button>{list.id}. {list.name}</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Lists;