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

    async function addTask(taskObj) {
        try {
            await fetch(tasks_url, {
                method: 'POST',
                body: JSON.stringify(taskObj),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success === true) {
                        setTasks(curr => [...curr, taskObj])
                    } else {
                        throw new Error(data.message)
                    }
                });
        } catch (err) {
            console.error('Errore nella richesta API:', err.message)
        }
    }

    function removeTask() {

    }

    function updateTask() {

    }

    return { tasks, addTask, removeTask, updateTask }
}