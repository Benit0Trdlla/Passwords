import { useContext } from 'react'
import { deletePassword } from '../../../lib/deletePassword'
import { SavedContext } from '../../../contexts/saved-context'
import { IndexPasswordsContext } from '../../../contexts/indexPasswords'
export const Modal = () => {
    const { setSaved } = useContext(SavedContext);
    const { indexPasswords } = useContext(IndexPasswordsContext);

    const handleDelete = (passedIndex) => {
        console.log("CLICK", indexPasswords);
        deletePassword(passedIndex);
        setSaved(true)
        setTimeout(() => {
            setSaved(false);
        }, 500);
    }
    return (
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-light">
                    <div className="modal-body">
                        <div className="m-3">
                            <p className="fw-light text-danger">Ingresa <span className="fw-bold">&quot;Confirmar&quot;</span> para eliminar la contraseña</p>
                            <input type="text" className="form-control bg-light text-danger border-danger" id="exampleFormControlInput1" placeholder="Google" />
                            {/* {alertMessage &&
                                <div className={`alert ${stateAlert ? 'alert-success' : 'alert-danger'} w-100 mx-auto mt-4 mb-0`} role="alert">
                                    <p className="mb-0">{alertMessage}</p>
                                </div>
                            } */}
                        </div>
                    </div>
                    <div className="modal-footer border-top border-danger">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Cerrar</button>
                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(indexPasswords)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}