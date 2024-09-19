import { Checkbox, CopyBtn, DeleteBtn } from '../../components'
import { useEffect, useState, useContext } from 'react'
import { readLocalStorage } from '../../lib/readLocalStorage'
import { SavedContext } from '../../contexts/saved-context'

export const ListPasswords = () => {
    const { save } = useContext(SavedContext);

    const [passwords, setPassword] = useState([])

    useEffect(() => {
        const result = readLocalStorage()
        setPassword(result)
    }, [save])

    return (
        <ul className="list-group list-group-flush text-start w-80 px-3">
            {passwords.length === 0 && <p className="text-danger text-center">No hay contraseñas guardadas, por favor ingresa una 🙂</p>}
            {passwords.map((item, index) => (
                <li className="list-group-item d-flexr" key={index}>
                    <div className='fw-bold d-flex justify-content-between'>
                        <div className='d-flex gap-3 align-items-center'>
                            <Checkbox websiteName={item.value}>
                                <p className='m-0'>{item.key}</p>
                            </Checkbox>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <CopyBtn onClick={() => navigator.clipboard.writeText(item.value)} /><DeleteBtn index={index} />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}