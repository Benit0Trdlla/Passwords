import { Checkbox, CopyBtn, DeleteBtn } from '../../components'
import { readLocalStorage } from '../../lib/readLocalStorage'
export const ListPasswords = () => {
    const result = readLocalStorage()
    if (result instanceof Error) {
        return <p className='m-0 text-danger text-center'>{result.message}</p>
    }
    return (
        <ul className="list-group list-group-flush text-start w-80 px-3">
            {result.map((item, index) => (
                <li className="list-group-item d-flexr" key={index}>
                    <div className='fw-bold d-flex justify-content-between'>
                        <div className='d-flex gap-3 align-items-center'>
                            <Checkbox websiteName={item.value}>
                                <p className='m-0'>{item.key}</p>
                            </Checkbox>
                        </div>
                        <div className='d-flex gap-3 align-items-center'>
                            <CopyBtn onClick={() => navigator.clipboard.writeText(item.value)}/><DeleteBtn />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}