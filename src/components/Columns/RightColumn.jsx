import { useState } from "react"
import { Switch, Button, Input, CopyBtn, SaveBtn } from "../../components"
import { generatePassword } from "../../lib/generatePassword";

export const RightColumn = () => {
    const [automatico, setAutomatico] = useState(true);
    const [personalizado, setPersonalizado] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const [password, setPassword] = useState('');

    const handleChechbox = (e) => {
        const { name } = e.target;
        setAutomatico(name === 'automatico');
        setPersonalizado(name !== 'automatico');
        setPassword('')
    };

    return (
        <div className="col-md-6 px-0 px-lg-3 text-center">
            <div className='px-3'>
                <hr />
            </div>
            <div className="p-3">
                <div className='d-flex justify-content-center align-items-center gap-2 mb-2'>
                    <Switch name="automatico" state={automatico} onChange={handleChechbox} />
                    <span>Generar automaticamente</span>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2 mb-3'>
                    <Switch name="personalizado" state={personalizado} onChange={handleChechbox} />
                    <span>Personalizar la contraseña</span>
                </div>
                <div className='pt-3 me-1 me-lg-0 me-lg-0'>
                    <div className='d-flex justify-content-center align-items-center gap-3'>
                        <Input stateSwitch={automatico} onChange={(e) => setInputValue(e.target.value)} inputValue={inputValue} />
                        <Button onClick={() => setPassword(generatePassword(inputValue, 16, automatico))} />
                    </div>
                    <div className='mt-4 pt-1 d-flex justify-content-center align-items-center gap-1'>
                        <p className='m-0 mb-2 w-50 text-center me-2'>
                            Contraseña generada: {!password ? '...' : password}
                        </p>
                        <CopyBtn />
                        <SaveBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}