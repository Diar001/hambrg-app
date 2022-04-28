import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = ({history}) => {
  // State for disabled button
  const [disabled, setDisabled] = useState(false);

  // State for menu button
  const [menu, setMenu] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  // Use effect for page changes
  useEffect(() => {
      //listen for page changes
      history.listen(() => {
          setMenu({clicked: false, menuName: "Menu"});
      });
  })

  const handleMenu = () => {
    disableMenu();
    if (menu.initial === false) {
      setMenu({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (menu.clicked === true) {
      setMenu({
        clicked: !menu.clicked,
        menuName: "Menu",
      });
    } else if (menu.clicked === false) {
      setMenu({
        clicked: !menu.clicked,
        menuName: "Close",
      });
    }
  };

  // Determine if our menu should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">HAMBRG.</Link>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger menu={menu} />
    </header>
  );
};

export default withRouter(Header);
