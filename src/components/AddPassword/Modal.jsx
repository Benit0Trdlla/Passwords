import { useState, useContext } from "react"
import { saveLocalStorage } from "../../lib/saveLocalStorage";
import { SavedContext } from "../../contexts";
export const Modal = () => {
    const { setSaved } = useContext(SavedContext);

    const [websiteName, setWebsiteName] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [stateAlert, setStateAlert] = useState(false);

    const handleAddPassword = () => {
        const result = saveLocalStorage(websiteName, password);
        if (result instanceof Error) { setAlertMessage(result.message); }
        else { setStateAlert(true); setAlertMessage("Datos guardados correctamente 👍"); }

        setWebsiteName('');
        setPassword('');
    }

    const hadleRender = () => {
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 1500);
        setAlertMessage('');
    }
    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addModalLabel">Ingresa tu contraseña</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="m-3">
                            <input type="text" className="form-control mb-2" id="exampleFormControlInput1" value={websiteName} onChange={(e) => setWebsiteName(e.target.value)} placeholder="Nombre del sitio web" />
                            <input type="text" className="form-control" id="exampleFormControlInput1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Tu contraseña" />
                            {alertMessage &&
                                <div className={`alert ${stateAlert ? 'alert-success' : 'alert-danger'} w-100 mx-auto mt-4 mb-0`} role="alert">
                                    <p className="mb-0">{alertMessage}</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hadleRender}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={handleAddPassword}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}