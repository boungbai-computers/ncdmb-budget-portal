import React from "react";
import { dropdownData } from "../data/dropdown";

const DropdownList = ({ setInputValue, setIsActive, isActive }) => {
  return (
    <div className="dropdown-content">
      {dropdownData.map((department, index) => (
        <div
          key={index}
          className="dropdown-item"
          onClick={(e) => {
            setIsActive(!isActive);
            setInputValue(e.target.textContent);
          }}
        >
          {department.department}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
