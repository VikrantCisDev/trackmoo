import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

function CustomDropdown({ options = [], children }) {
  return (
    <Dropdown className='custom-dropdown'>
      <Dropdown.Toggle id='dropdownCustom'>
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Array.isArray(options) && options.length > 0 ? (
          options.map((item, key) => (
            <Dropdown.Item href='#/action-1' key={key}>
              {item}
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>No options available</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomDropdown;
