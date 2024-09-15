import './Input.css';
import { useEffect } from 'react';
export const Input = ({ stateSwitch, onChange, inputValue }) => {
  
  // Limpiar el valor del input cuando cambie el stateSwitch
  useEffect(() => {
    if (stateSwitch) {
      onChange({ target: { value: '' } });
    }
  }, [stateSwitch, onChange]);

  return (
    <div className="containerBtn">
      <input required type="text" maxLength={16} value={stateSwitch ? ' ' : inputValue} name="text" className="input" onChange={onChange} disabled={stateSwitch} />
      <label className="label">{stateSwitch ? 'Presiona el boton ➡' : 'Ingresa una palabra'}</label>
    </div>
  );
};


