import {
    useNavigate,
    useParams,
} from "react-router-dom";
import { useGlobalContext } from '../contexts/GlobalContext'
import { useState } from "react";
import useTasks from "../hooks/useTasks";
import Modal from "../components/Modal";

function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useGlobalContext();
    const { removeTask } = useTasks();
    const currentTask = tasks.find(task => task.id === parseInt(id));
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    async function handleTaskDelete() {
        console.log(`Elimino task con id ${id}`)
        const res = await removeTask(parseInt(id));

        console.log(res.success)

        if (res.success) {
            navigate("/");
            alert(`Task "${currentTask.title}" eliminata con successo.`);
        } else {
            alert(res.message)
        }
    }

    return (
        <>
            <div className="container">
                <h1>Task with id {id}</h1>
                <h2>{currentTask?.title}</h2>
                <p>{currentTask?.description}</p>
                <p>{currentTask?.status}</p>
                <p>{new Date(currentTask?.createdAt).toLocaleString()}</p>

                <button onClick={() => setShow(true)}>Elimina task</button>
            </div>
            <Modal
                title={'Elimina task'}
                content={`Sei sicuro di voler eliminare la task "${currentTask?.title}"`}
                show={show}
                onClose={() => setShow(false)}
                onConfirm={handleTaskDelete}
                confirmText="Elimina task"
            />
        </>
    )
}

export default TaskDetail