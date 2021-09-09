import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import DropdownList from "./DropdownList";

const Dropdown = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div id="wrapper">
        <input
          placeholder="SELECT DEPARTMENT"
          value={inputValue}
          onChange={() => onChange}
          name="staffDepartment"
        />

        <FaArrowDown className="icon" onClick={(e) => setIsActive(!isActive)} />
      </div>

      {isActive && (
        <DropdownList
          isActive={isActive}
          setIsActive={setIsActive}
          setInputValue={setInputValue}
        />
      )}
    </div>
  );
};

export default Dropdown;
