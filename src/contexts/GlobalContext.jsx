import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {

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

    console.log(tasks);

    return (
        <GlobalContext.Provider value={{
            tasks,
            setTasks,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}


export { GlobalProvider, useGlobalContext }