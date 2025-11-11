import { useGlobalContext } from '../contexts/GlobalContext'

function TaskList() {
    const { tasks } = useGlobalContext()

    return (
        <div>
            <h1>Le tue task</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList