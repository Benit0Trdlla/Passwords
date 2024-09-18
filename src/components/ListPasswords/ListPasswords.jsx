import {Checkbox, CopyBtn, DeleteBtn} from '../../components'
export const ListPasswords = () => {
    return (
        <ul className="list-group list-group-flush text-start w-80 px-3">
            <li className="list-group-item d-flexr">
                <div className='fw-bold d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        <Checkbox>
                            <p className='m-0'>Google</p>
                        </Checkbox>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <CopyBtn /><DeleteBtn />
                    </div>
                </div>
            </li>
            <li className="list-group-item d-flexr">
                <div className='fw-bold d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        <Checkbox>
                            <p className='m-0'>Google</p>
                        </Checkbox>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <CopyBtn /><DeleteBtn />
                    </div>
                </div>
            </li>
            <li className="list-group-item d-flexr">
                <div className='fw-bold d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        <Checkbox>
                            <p className='m-0'>Google</p>
                        </Checkbox>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <CopyBtn /><DeleteBtn />
                    </div>
                </div>
            </li>
            <li className="list-group-item d-flexr">
                <div className='fw-bold d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        <Checkbox>
                            <p className='m-0'>Google</p>
                        </Checkbox>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <CopyBtn /><DeleteBtn />
                    </div>
                </div>
            </li>
                        <li className="list-group-item d-flexr">
                <div className='fw-bold d-flex justify-content-between'>
                    <div className='d-flex gap-3 align-items-center'>
                        <Checkbox>
                            <p className='m-0'>Google</p>
                        </Checkbox>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <CopyBtn /><DeleteBtn />
                    </div>
                </div>
            </li>
        </ul>
    )
}