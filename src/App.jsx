import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Switch from './components/Switch'
import LinkedInButton from './components/socials/Linkedin'
import GithubButton from './components/socials/Github'
import CopyBtn from './components/CopyBtn'
import DeleteBtn from './components/DeleteBtn'
import Checkbox from './components/Checkbox'
function App() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container d-flex flex-column mt-5 mt-lg-0">
          <div className="row">
            <div className="col-md-6 px-0 px-lg-3 text-center">
              <h1>Genera tu contraseña</h1>
              <hr />
              <div className="rounded p-3">
                <div className='d-flex justify-content-center align-items-center gap-2 mb-2'>
                  <Switch />
                  <span>Generar automaticamente</span>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-2 mb-3'>
                  <Switch />
                  <span>Personalizar la contraseña</span>
                </div>
                <div className='pt-3 me-3 me-lg-0'>
                  <div className='d-flex justify-content-center align-items-center gap-3 '>
                    <Input />
                    <Button />
                  </div>
                  <div className='mt-3 d-flex justify-content-center align-items-center gap-1'>
                    <p className='m-0 mb-2 w-50 text-center'>Contrase;a generada: 1111111111111111 </p>
                    <CopyBtn />
                  </div>
                </div>
              </div>
            </div>
            <div className='order-3 mt-3 d-flex justify-content-center align-items-center  mb-lg-0 w-50 mx-auto'>
              <div className='d-flex justify-content-center gap-4 me-0 me-lg-3'>
                <LinkedInButton />
                <GithubButton />
              </div>
            </div>
            <div className="col-md-6 px-0 p-0 px-lg-2">
              <div className='rounded mt-2 mt-lg-0 h-100'>
                <div className='px-3'>
                  <h1 className='text-start'>Gestiona</h1>
                  <hr className='w-50' />
                </div>
                <ul className="list-group list-group-flush text-start w-80 px-3">
                  <li className="list-group-item d-flexr">
                    <div className='fw-bold d-flex justify-content-between'>
                      <div className='d-flex gap-3 align-items-center'>
                        <Checkbox>
                          <p className='m-0'>bobygatos4</p>
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
