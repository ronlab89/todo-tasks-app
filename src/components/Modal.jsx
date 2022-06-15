import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Modal = () => {

    const [modal, setModal] = useState(false);

    const handleModal = (e) => {
        e.preventDefault();
        console.log('Modal working');
        setModal(!modal);
    }

  return (
    <>
    <Link to={'#'}><p className="lead link redirect" onClick={handleModal}>Recuperar clave</p></Link>
    <button type="button" className="" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Launch static backdrop modal
    </button>

    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            ...
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
        </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default Modal