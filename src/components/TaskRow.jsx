import React from 'react'
import { NavLink } from 'react-router-dom';

const TaskRow = React.memo(function TaskRow({ task }) {

    function getBackgroundColor(status) {
        switch (status.toLowerCase()) {
            case "to do":
                return '#ff8a8a';
            case "done":
                return '#b1f2c9';
            case "doing":
                return '#fcfc9e';
        }
    }

    return (
        <div className="tableRow">
            <div className='tableRowCell'>
                <NavLink to={`/task/${task.id}`}>{task.title}</NavLink>
            </div>
            <div
                style={{ backgroundColor: getBackgroundColor(task.status) }}
                className='tableRowCell'
            >
                {task.status}
            </div>
            <div className='tableRowCell'>{new Date(task.createdAt).toLocaleString()}</div>
        </div>
    )
});

export default TaskRow