import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

function EditTaskModal({ show, onClose, task, onSave }) {

    const [title, setTitle] = useState(task?.title);
    const [description, setDescription] = useState(task?.description);
    const [status, setStatus] = useState(task?.status);
    const updateFormRef = useRef();

    useEffect(() => {
        setTitle(task?.title);
        setDescription(task?.description);
        setStatus(task?.status);
    }, [task])

    return show && (
        <Modal
            title={'Modifica task'}
            show={show}
            content={
                <form ref={updateFormRef}>
                    <input
                        type='text'
                        placeholder='Nome'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder='Descrizione'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value={'To do'}>To do</option>
                        <option value={'Doing'}>Doing</option>
                        <option value={'Done'}>Done</option>
                    </select>
                </form>
            }
            onClose={onClose}
            onConfirm={() => {
                updateFormRef.current.requestSubmit();
                onSave({
                    ...task,
                    title,
                    description,
                    status
                })
                onClose()
            }}
            confirmText='Salva'
        />
    )
}

export default EditTaskModal