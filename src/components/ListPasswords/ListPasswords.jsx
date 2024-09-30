import { Checkbox, CopyBtn, DeleteBtn, AddPassword, AddBtn } from '../../components'
import { useEffect, useState, useContext } from 'react'
import { readLocalStorage } from '../../lib/readLocalStorage'
import { SavedContext, IndexPasswordsContext } from '../../contexts'

export const ListPasswords = () => {
    const { save } = useContext(SavedContext);
    const { setIndexPasswords } = useContext(IndexPasswordsContext);


    const [passwords, setPassword] = useState([])
    // const [selectedIndex, setSelectedIndex] = useState(0);

    const handleShowNewPasswords = () => {
        const result = readLocalStorage()
        setPassword(result)
    }

    useEffect(() => {
        // const result = readLocalStorage()
        // setPassword(result)
        handleShowNewPasswords()
    }, [save])

    return (
        <>
            <ul className="list-group list-group-flush text-start w-80 px-3 ms-3">
                {passwords.length === 0 &&
                    <AddPassword />
                }
                {passwords.length > 0 &&
                    <div className='d-flex justify-content-center'>
                        <AddBtn />
                    </div>
                }
                {passwords.map((item, index) => (
                    <li className="list-group-item d-flexr" key={index}>
                        <div className='fw-bold d-flex justify-content-between'>
                            <div className='d-flex gap-3 align-items-center'>
                                <Checkbox websiteName={item.value}>
                                    <p className='m-0'>{item.key}</p>
                                </Checkbox>
                            </div>
                            <div className='d-flex gap-3 align-items-center'>
                                <CopyBtn onClick={() => navigator.clipboard.writeText(item.value)} /><DeleteBtn onClick={() => setIndexPasswords(index)} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}