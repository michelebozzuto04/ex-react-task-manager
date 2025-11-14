import {
    useParams,
} from "react-router-dom";

function TaskDetail() {

    const { id } = useParams();

    return (
        <div className="container">
            <h1>Task with id {id}</h1>
        </div>
    )
}

export default TaskDetail