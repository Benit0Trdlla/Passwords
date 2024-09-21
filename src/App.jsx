import { RightColumn, LeftColumn, SocialsSection } from './components'
// import { SocialsSection } from './components/Socials/SocialsSection'
import PasswordContextProvider from './contexts/password-context'
import SavedPasswordContextProvider from './contexts/saved-context'
import './App.css'

function App() {

  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container d-flex flex-column pt-2 pt-lg-3 mt-lg-0 vh-100">
          <div className='p-3'>
            <h1 className='text-center fs-2 fw-bold'>🔐 Genera y Gestiona Tus Contraseñas 🔑</h1>
            <div className='fs-6 mt-4 fw-light'>
              <p className='text-center'>
                Genera y gestiona tus contraseñas de forma segura. Puedes crearlas automáticamente o personalizarlas con una palabra específica, con longitudes entre 8 y 16 caracteres. Guarda, copia, utiliza y elimina contraseñas fácilmente con una interfaz intuitiva.
              </p>
            </div>
          </div>
          <div className="row">
            <PasswordContextProvider>
              <SavedPasswordContextProvider>
                <LeftColumn />
                <SocialsSection />
                <RightColumn />
              </SavedPasswordContextProvider>
            </PasswordContextProvider>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
