import { Checkbox, CopyBtn, DeleteBtn } from "../../components"

export const LeftColumn = () => {
    return (
        <div className="col-md-6 px-0 p-0 px-lg-2">
            <div className='mt-2 mt-lg-0 h-100 overflow-auto' style={{ maxHeight: '280px' }}>
                <div className='px-3'>
                    <hr />
                </div>
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
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A second item</li>
                </ul>
            </div>
        </div>
    )
}