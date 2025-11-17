import {
    useParams,
} from "react-router-dom";
import { useGlobalContext } from '../contexts/GlobalContext'
import { useState } from "react";

function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useGlobalContext();
    const currentTask = tasks.find(task => task.id === parseInt(id));

    function handleTaskDelete() {
        console.log(`Elimino task con id ${id}`)
    }

    return (
        <div className="container">
            <h1>Task with id {id}</h1>
            <h2>{currentTask?.title}</h2>
            <p>{currentTask?.description}</p>
            <p>{currentTask?.status}</p>
            <p>{new Date(currentTask?.createdAt).toLocaleString()}</p>

            <button onClick={handleTaskDelete}>Elimina task</button>
        </div>
    )
}

export default TaskDetail