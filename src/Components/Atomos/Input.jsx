
// eslint-disable-next-line react/prop-types
const Input = ({ height, width, placeholder, type }) => {
  const inputStyle = {
    height: height || '40px',
    width: width || '200px',
    backgroundColor:'transparent',
    border:'none',
    borderBottom: '2px solid red',
    fontSize: '16px',
    
  };

  return (
    <input
      type={type || 'text'}
      placeholder={placeholder || 'Enter text'}
      style={inputStyle}
    />
  );
};

export default Input;
