import { useState } from 'react'
import { SocialsSection, GithubButton, LinkedInButton, Button, Checkbox, Switch, Input, CopyBtn, DeleteBtn, SaveBtn } from './components'
import './App.css'

function App() {
  const [automatico, setAutomatico] = useState(true);
  const [personalizado, setPersonalizado] = useState(false);

  const handleChechbox = (e) => {
    const { name } = e.target;
    if (name === 'automatico') {
      setAutomatico(true);
      setPersonalizado(false);
    } else {
      setAutomatico(false);
      setPersonalizado(true);
    }
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container d-flex flex-column pt-2 pt-lg-3 mt-lg-0 vh-100">
          <h1 className='text-center fs-1 fw-bold'>Gestor de Contraseñas Inteligente</h1>
          <div className='text-center fs-6 mt-3'>
            <p>
              Esta aplicación te ofrece una forma sencilla y segura de generar, gestionar y utilizar tus contraseñas. Con dos opciones para generar contraseñas, puedes crear una automáticamente o personalizarla incluyendo una palabra específica. Las contraseñas generadas cuentan con una longitud mínima de 8 caracteres y un máximo de 16, garantizando robustez.
            </p>
            <p>
              Además, podrás guardar las contraseñas generadas, copiarlas rápidamente cuando las necesites, utilizarlas en tus aplicaciones y sitios web, e incluso eliminarlas cuando ya no las necesites. Todo esto con una interfaz intuitiva que te facilitará la vida digital.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 px-0 px-lg-3 text-center">
              <hr />
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
                    <Input stateSwitch={automatico} />
                    <Button />
                  </div>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-1'>
                    <p className='m-0 mb-2 w-50 text-center me-2'>Contrase;a generada: 1111111111111111 </p>
                    <CopyBtn />
                    <SaveBtn />
                  </div>
                </div>
              </div>
            </div>
            <SocialsSection />
            <div className="col-md-6 px-0 p-0 px-lg-2">
              <div className='mt-2 mt-lg-0 h-100'>
                <div className='px-3'>
                  <hr className='w-50' />
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
