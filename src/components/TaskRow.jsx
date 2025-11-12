import React from 'react'

const TaskRow = React.memo(function TaskRow({ title, status, createdAt }) {

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
            <div className='tableRowCell'>{title}</div>
            <div
                style={{ backgroundColor: getBackgroundColor(status) }}
                className='tableRowCell'
            >
                {status}
            </div>
            <div className='tableRowCell'>{createdAt.toLocaleString()}</div>
        </div>
    )
});

export default TaskRow