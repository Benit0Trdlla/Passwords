import "./AddBtn.css"
import { Modal } from "../../AddPassword/Modal"
export const AddBtn = () => {
    return (
        <>
        <button type="button" className="add-button" data-bs-toggle="modal" data-bs-target="#addModal">
            <span className="button__text">Añadir</span>
            <span className="button__icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    stroke="currentColor"
                    height="24"
                    fill="none"
                    className="svg me-2"
                >
                    <line y2="19" y1="5" x2="12" x1="12" />
                    <line y2="12" y1="12" x2="19" x1="5" />
                </svg>
            </span>
        </button>
        
        <Modal />
        </>
    )
}