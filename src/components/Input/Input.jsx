import './Input.css';
export const Input = ({ stateSwitch, onChange, inputValue }) => {
  return (
    <div className="containerBtn">
      <input required type="text" maxLength={16} value={inputValue} name="text" className="input" onChange={onChange} disabled={stateSwitch} />
      <label className="label">{stateSwitch ? 'Presiona el boton ➡' : 'Ingresa una palabra'}</label>
    </div>
  );
};


