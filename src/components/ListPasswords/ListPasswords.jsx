import { Checkbox, CopyBtn, DeleteBtn } from '../../components'
// import { useEffect, useState, useMemo } from 'react'
import { readLocalStorage } from '../../lib/readLocalStorage'
export const ListPasswords = () => {
    // const [state, setState] = useState('')
    const result = readLocalStorage()
    // if (result.message) {
    //     setState(result.message)
    // }

    return (
        <ul className="list-group list-group-flush text-start w-80 px-3">
            {result.message && <p className="text-danger text-center">{result.message}</p>}
            {!result.message && result.map((item, index) => (
                <li className="list-group-item d-flexr" key={index}>
                    <div className='fw-bold d-flex justify-content-between'>
                        <div className='d-flex gap-3 align-items-center'>
                            <Checkbox websiteName={item.value}>
                                <p className='m-0'>{item.key}</p>
                            </Checkbox>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <CopyBtn onClick={() => navigator.clipboard.writeText(item.value)} /><DeleteBtn  index={index}/>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}