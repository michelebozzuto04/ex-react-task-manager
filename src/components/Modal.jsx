import React from 'react'
import { createPortal } from 'react-dom'

function Modal({ title, content, show, onClose, onConfirm, confirmText = "Conferma" }) {
    return show && createPortal(
        <div className='modalPage'>
            <div className='modalContainer'>
                <h2>{title}</h2>
                <p>{content}</p>

                <div className='modalAction'>
                    <button
                        onClick={onClose}
                        className='closeButton'
                    >
                        Annulla
                    </button>
                    <button
                        onClick={onConfirm}
                        className='confirmButton'
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Modal