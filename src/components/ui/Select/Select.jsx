import './Select.scss'

const Select = ({ value, onChange, children }) => {
  return (
    <select value={value} onChange={onChange} className='select'>
      {children}
    </select>
  );
};

export default Select;
  