import './Select.scss'

const Select = ({ value, onChange, children }) => {
  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
