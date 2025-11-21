import { useGlobalContext } from '../contexts/GlobalContext'
import TaskRow from '../components/TaskRow'
import { useMemo, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function TaskList() {
    const { tasks } = useGlobalContext();
    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);

    const sortedTasks = useMemo(() => {
        if (sortBy === 'title') {
            return tasks.sort((a, b) =>
                sortOrder === 1 ? a.title.localeCompare(b.title, "fr", { ignorePunctuation: true }) :
                    b.title.localeCompare(a.title, "fr", { ignorePunctuation: true })
            )
        }

        if (sortBy === 'status') {
            const statusOrder = {
                "To do": 1,
                "Doing": 2,
                "Done": 3
            }

            return tasks.sort((a, b) => {
                const order1 = statusOrder[a.status];
                const order2 = statusOrder[b.status];

                return sortOrder === 1 ?
                    order1 - order2 :
                    order2 - order1
            })
        }

        if (sortBy === 'createdAt') {
            return tasks.sort((a, b) => {
                return sortOrder === 1 ?
                    new Date(a.createdAt) - new Date(b.createdAt) :
                    new Date(b.createdAt) - new Date(a.createdAt)
            })
        }
    }, [tasks, sortBy, sortOrder])

    function handleHeaderClick(cellTitle) {
        return sortBy === cellTitle ? setSortOrder(sortOrder === -1 ? 1 : -1) : setSortBy(cellTitle)
    }

    function renderHeaderIcon(cellTitle) {
        return sortBy === cellTitle && (sortOrder === 1 ? <FaChevronDown /> : <FaChevronUp />)
    }

    return (
        <div className='container'>
            <h1>Le tue task</h1>

            <div className='tasksTable'>
                <div className="tableHeader">
                    <div
                        className='tableHeaderCell'
                        onClick={() => handleHeaderClick('title')}
                    >
                        {renderHeaderIcon('title')}
                        Nome
                    </div>
                    <div
                        className='tableHeaderCell'
                        onClick={() => handleHeaderClick('status')}
                    >
                        {renderHeaderIcon('status')}
                        Stato
                    </div>
                    <div
                        className='tableHeaderCell'
                        onClick={() => handleHeaderClick('createdAt')}
                    >
                        {renderHeaderIcon('createdAt')}
                        Data di creazione
                    </div>
                </div>
                {sortedTasks.map(task => (
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