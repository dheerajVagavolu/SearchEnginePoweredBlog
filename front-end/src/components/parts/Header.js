import React from "react";

const Header = () => {
  const logo = {
    fontSize: "40px",
    marginLeft: "20px",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "800",
    color: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  const head = {
    textAlign: "center",
  };

  return (
    <>
      <div style={head}>
        <a style={logo} href="/">
          App
        </a>
      </div>
    </>
  );
};

export default Header;
