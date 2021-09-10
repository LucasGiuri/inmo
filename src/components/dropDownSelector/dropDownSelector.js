import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownBtn,
  CaretDown,
  DropdownContent,
  DropdownItem,
} from "./dropDownSelector.styles";

const DropdownSelector = ({ items = [], selected, setSelected, width }) => {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState('TODOS');

  useEffect(() => {
  const filtered = items.find((obj) => obj.id === selected);
    setText(filtered ? filtered.value : 'TODOS');
  }, [selected]);

  return (
    <Dropdown width={width}>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
        {text}
        <CaretDown />
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {items.map((option) => (
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
