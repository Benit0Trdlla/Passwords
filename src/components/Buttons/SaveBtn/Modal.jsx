import { useState, useContext } from 'react'
import { PasswordContext } from '../../../contexts/password-context';
export const Modal = () => {
    const { password } = useContext(PasswordContext);
    const [websiteName, setWebsiteName] = useState("");

    const [stateAlert, setStateAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleSave = () => {
        if (websiteName.trim() === "") { setStateAlert(true); setErrorMessage("Ingresa el nombre del sitio web, por favor 😉"); }
        else console.log(password);
    }

    return (
        <div className="modal fade" id="saveModal" tabIndex="-1" aria-labelledby="saveModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="saveModalLabel">Ingresa el nombre del Sitio Web</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="m-3">
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Google" onChange={(e) => setWebsiteName(e.target.value)} />
                            {stateAlert &&
                                <div className="alert alert-danger w-100 mx-auto mt-4 mb-0" role="alert">
                                    <p className="mb-0">{errorMessage}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setStateAlert(false)}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}