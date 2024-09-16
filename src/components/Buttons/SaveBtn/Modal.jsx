import { useState } from 'react'
export const Modal = () => {
    const [websiteName, setWebsiteName] = useState("");
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
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={() => console.log(websiteName)} data-bs-dismiss="modal">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}