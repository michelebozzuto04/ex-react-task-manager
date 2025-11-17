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

    async function removeTask(id) {
        try {
            const res = await fetch(`${tasks_url}/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
            });

            const data = await res.json();

            if (data.success) {
                setTasks(curr => {
                    console.log(curr)
                    const filteredTasks = curr.filter(task => task.id !== id);
                    console.log('filteredTasks:', filteredTasks)
                    return filteredTasks
                });

                return { success: true }
            } else {
                throw new Error(data.message);
            }

        } catch (err) {
            return { success: false, message: err.message }
        }
    }

    function updateTask() {

    }

    return { tasks, addTask, removeTask, updateTask }
}