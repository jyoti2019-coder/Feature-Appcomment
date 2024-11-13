import React, { useState } from 'react'; 

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="Container">
      <div className="navbar">
        <div className="logo">
          <a href="#">Ajit Waydande</a>
        </div>
        <ul className="ul">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li 
            className="service-menu" 
            onMouseEnter={toggleDropdown} 
            onMouseLeave={toggleDropdown}
          >
            <a href="#">Service</a>
            {dropdownVisible && (
              <div className="dropdown">
                <ul>
                  <li>Furniture Layout and Space planning</li>
                  <li>Furniture, Fabric and Accessories Selections and Specifications</li>
                  <li>Tile and Surface Selection and Layout</li>
                  <li>Finish Selections and Specifications</li>
                  <li>Hardware, Plumbing and Appliance Specification</li>
                  <li>Lighting Design</li>
                  <li>Exterior Finish Selections</li>
                  <li>Interior Detailing</li>
                </ul>
              </div>
            )}
          </li>
          <button className="button"><a href="#">SignIn</a></button>
          <button className="button"><a href="#">SignOut</a></button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
