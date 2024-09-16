import { useContext, useState } from "react"
import { Switch, Button, Input, CopyBtn, SaveBtn } from "../../components"
import { generatePassword } from "../../lib/generatePassword";
import { PasswordContext } from "../../contexts/password-context";


export const RightColumn = () => {
    const { password, setPassword } = useContext(PasswordContext);

    const [automatico, setAutomatico] = useState(true);
    const [personalizado, setPersonalizado] = useState(false);

    const [inputValue, setInputValue] = useState('');


    const handleCheckbox = (e) => {
        const { name } = e.target;
        setAutomatico(name === 'automatico');
        setPersonalizado(name !== 'automatico');
        setPassword('')
    };
    const handleGeneratePassword = () => {
        const result = generatePassword(inputValue, 16, automatico);
        if (result instanceof Error) console.error(result.message);
        else setPassword(result);
    };

    return (
        <div className="col-md-6 px-0 px-lg-3 text-center">
            <div className='px-3'>
                <hr />
            </div>
            <div className="p-3">
                <div className='d-flex justify-content-center align-items-center gap-2 mb-3'>
                    <Switch name="automatico" state={automatico} onChange={handleCheckbox} />
                    <span>Generar automaticamente</span>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2 mb-3'>
                    <Switch name="personalizado" state={personalizado} onChange={handleCheckbox} />
                    <span>Personalizar la contraseña</span>
                </div>
                <div className='pt-3 me-1 me-lg-0 me-lg-0'>
                    <div className='d-flex justify-content-center align-items-center gap-3'>
                        <Input stateSwitch={automatico} onChange={(e) => setInputValue(e.target.value)} inputValue={inputValue} />
                        <Button onClick={handleGeneratePassword} />
                    </div>
                    <div className='mt-4 pt-1 d-flex justify-content-center align-items-center gap-1'>
                        {password &&
                            <>
                                <p className='m-0 mb-2 w-50 text-center me-2'>
                                    Contraseña generada: {password}
                                </p>
                                <CopyBtn />
                                <SaveBtn />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}