import React, { useState } from "react";

import { typeOfProperty, neighborhoods } from "../../constants";

import {
  Dropdown,
  DropdownBtn,
  CaretDown,
  DropdownContent,
  DropdownItem,
} from "./dropDownSelector.styles";

const DropdownSelector = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Dropdown>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <CaretDown />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {typeOfProperty.map((option) => (
            <DropdownItem
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option.value}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </Dropdown>
  );
};

export default DropdownSelector;
