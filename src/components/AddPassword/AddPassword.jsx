import { AddBtn } from "../../components"
export const AddPassword = () => {
    return (
        <>
            <div className='d-flex justify-content-center'>
                <AddBtn />
            </div>
            <p className="text-danger text-center mt-3">
                No hay contraseñas guardadas, ingresa una contraseña que ya existe o genera una nueva 🙂
            </p>
        </>
    )
}