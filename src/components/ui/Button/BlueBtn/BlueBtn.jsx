import './BlueBtn.scss';

const BlueBtn = ({ children, onClick }) => {
  return (
    <button className='blueBtn' onClick={onClick}>
      {children}
    </button>
  );
};

export default BlueBtn;
