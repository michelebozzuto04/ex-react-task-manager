import React, { useRef, useState } from 'react'
import useTasks from '../hooks/useTasks';

function AddTask() {

    const [title, setTitle] = useState('');
    const descriptionRef = useRef('');
    const statusRef = useRef('');
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";
    const [error, setError] = useState('');
    const { addTask } = useTasks();

    function checkString(validationString, value) {
        if (!value || value.trim() === "") return false;

        for (let char of value) {
            if (validationString.includes(char)) {
                return false;
            }
        }

        return true;
    }

    function handleSubmit(e) {
        e.preventDefault()

        const isTitleValid = title.trim() !== '' && checkString(symbols, title);
        const description = descriptionRef.current.value;
        const status = statusRef.current.value;

        if (isTitleValid) {
            setError(null);
            console.log({ title, description, status });
            try {
                addTask({ title, description, status });
            } catch (err) {
                console.log(err)
            }
        } else {
            setError('Il titolo non può essere vuoto e non può contenere simboli speciali.')
            console.log('Qualcosa è sbagliato...')
        }
    }

    return (
        <div className='container'>
            <h1>Aggiungi task</h1>

            <form
                className='form'
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type='text'
                    placeholder='Title'
                    className={error && 'inputError'}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    type='text'
                    placeholder='Description'
                    rows={4}
                    ref={descriptionRef}
                />
                <select ref={statusRef}>
                    <option value={'To do'}>To do</option>
                    <option value={'Doing'}>Doing</option>
                    <option value={'Done'}>Done</option>
                </select>

                {error && (
                    <p className='errorMessage'>{error}</p>
                )}


                <input
                    className='formButton'
                    type='submit'
                    value={'Add task'}
                />
            </form>
        </div>
    )
}

export default AddTask