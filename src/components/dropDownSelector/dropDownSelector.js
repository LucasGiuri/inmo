import React, { useState } from "react";

import {
  Dropdown,
  DropdownBtn,
  CaretDown,
  DropdownContent,
  DropdownItem,
} from "./dropDownSelector.styles";

const DropdownSelector = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = [
    "DEPARTAMENTO",
    "TIPO CASA PH",
    "LOCAL",
    "OFICINA",
    "TERRENO",
    "COCHERA",
  ];
  return (
    <Dropdown>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <CaretDown />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {options.map((option) => (
            <DropdownItem
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </Dropdown>
  );
};

export default DropdownSelector;
