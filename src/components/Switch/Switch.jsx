import "./Switch.css";
export const Switch = ({ state, onChange, name }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={state} name={name} onChange={onChange} />
      <span className="slider" />
    </label>
  );
};

