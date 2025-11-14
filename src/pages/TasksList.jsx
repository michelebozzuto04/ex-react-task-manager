import { useGlobalContext } from '../contexts/GlobalContext'
import TaskRow from '../components/TaskRow'

function TaskList() {
    const { tasks } = useGlobalContext()

    return (
        <div className='container'>
            <h1>Le tue task</h1>

            <div className='tasksTable'>
                <div className="tableHeader">
                    <div className='tableHeaderCell'>Nome</div>
                    <div className='tableHeaderCell'>Stato</div>
                    <div className='tableHeaderCell'>Data di creazione</div>
                </div>
                {tasks.map(task => (
                    <TaskRow
                        key={task.id}
                        task={task}
                    />
                ))}
            </div>
            <ul>
            </ul>
        </div>
    )
}

export default TaskList