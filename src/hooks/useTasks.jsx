import { useEffect, useState } from "react";

export default function useTasks() {

    const [tasks, setTasks] = useState([]);
    const tasks_url = import.meta.env.VITE_TASKS_URL;

    useEffect(() => {
        fetch(tasks_url)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
            })
            .catch(error => console.log(error))
    }, [])

    function addTask() {

    }

    function removeTask() {

    }

    function updateTask() {

    }

    return { tasks, addTask, removeTask, updateTask }
}