import { ListPasswords } from ".."
import "./RightColumn.css"
export const RightColumn = () => {
    return (
        <div className="col-md-6 px-0 p-0 px-lg-2">
            <div className='mt-2 mt-lg-0 h-100 overflow-auto'>
                <div className='px-3'>
                    <hr />
                </div>
                <ListPasswords />
            </div>
        </div>
    )
}