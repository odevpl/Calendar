import './BtnNormal.scss';

const BtnNormal = ({ children, onClick }) => {
  return (
    <>
      <button className='btn' onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default BtnNormal;
