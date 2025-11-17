import { createContext, useState, useEffect, useContext } from "react";
import useTasks from "../hooks/useTasks";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [tasks, setTasks] = useState([]);
    const tasks_url = import.meta.env.VITE_TASKS_URL;

    useEffect(() => {
        fetch(tasks_url)
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                console.log('Initial data from global context:', data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <GlobalContext.Provider value={{
            tasks,
            setTasks
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}


export { GlobalProvider, useGlobalContext }