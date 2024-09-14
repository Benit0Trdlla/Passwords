import './Input.css';
export const Input = ({stateSwitch}) => {
  return (
    <div className="containerBtn">
      <input required type="text" name="text" className="input" onChange={(e) => { console.log(e.target.value) }} disabled={stateSwitch}/>
      <label className="label">{ stateSwitch ? 'Presiona el boton ➡' : 'Ingresa una palabra'}</label>
    </div>
  );
};


