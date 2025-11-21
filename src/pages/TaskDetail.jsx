import {
    useNavigate,
    useParams,
} from "react-router-dom";
import { useGlobalContext } from '../contexts/GlobalContext'
import { useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";
import { IoIosArrowBack } from "react-icons/io";

function TaskDetail() {

    const { id } = useParams();
    const { tasks } = useGlobalContext();
    const { removeTask, updateTask } = useTasks();
    const currentTask = tasks.find(task => task.id === parseInt(id));
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);

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

    async function handleTaskUpdate(updatedTask) {
        const res = await updateTask(updatedTask);
        console.log(res.success)

        if (res.success) {
            alert(`Task modificata con successo.`);
        } else {
            alert(res.message)
        }
    }

    return (
        <>
            <div className="container">
                <h3
                    className="backButton"
                    onClick={() => navigate('/')}
                >
                    <IoIosArrowBack />
                    Torna indietro
                </h3>
                <div className="taskDetails">
                    <h1>{currentTask?.title}</h1>
                    <p className="taskDescription">{currentTask?.description}</p>
                    <div
                        className={`taskStatus
                            ${currentTask?.status === "To do" ? "taskStatusToDo" :
                                currentTask?.status === "Doing" ? "taskStatusDoing" :
                                    "taskStatusDone"}
                        `}
                    >
                        {currentTask?.status}
                    </div>
                    <p className="taskDate">{new Date(currentTask?.createdAt).toLocaleString()}</p>

                    <button
                        onClick={() => setShow(true)}
                        className="detailButton"
                    >
                        Elimina task
                    </button>
                    <button
                        onClick={() => {
                            setUpdateShow(true)
                            console.log(currentTask)
                        }}
                        className="detailButton"
                    >
                        Modifica task
                    </button>
                </div>
            </div>
            <Modal
                title={'Elimina task'}
                content={<p>Sei sicuro di voler eliminare la task "{currentTask?.title}"</p>}
                show={show}
                onClose={() => setShow(false)}
                onConfirm={handleTaskDelete}
                confirmText="Elimina task"
            />
            <EditTaskModal
                show={updateShow}
                onClose={() => setUpdateShow(false)}
                task={currentTask}
                onSave={handleTaskUpdate}
            />
        </>
    )
}

export default TaskDetail