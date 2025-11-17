import { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function useTasks() {

    const { tasks, setTasks } = useGlobalContext();
    const tasks_url = import.meta.env.VITE_TASKS_URL;

    async function addTask(taskObj) {
        try {
            const res = await fetch(tasks_url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(taskObj)
            });

            const data = await res.json();

            if (data.success) {
                setTasks(curr => [...curr, data.task]);
            } else {
                throw new Error(data.message);
            }

        } catch (err) {
            console.error("Errore nella richiesta API:", err.message);
        }
    }

    function removeTask() {

    }

    function updateTask() {

    }

    return { tasks, addTask, removeTask, updateTask }
}