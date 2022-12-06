function Header({ text, bgColor, textColor }) {
  //Recieving the prop with destructuring
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h3>{text}</h3>
      </div>
    </header>
  );
}

/*
We can use default prop when a prop is not passed
but  a prop is recieved inside the argument
*/

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
