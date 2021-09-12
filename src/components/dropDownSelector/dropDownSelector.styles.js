import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

export const Dropdown = styled.div.attrs(() => ({}))`
  width: ${(props) => props.width || "100%"};
  margin-left: 0;
  position: relative;
`;

export const DropdownBtn = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  background: #121212;
  border: 2px solid #a60321;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
`;

export const CaretDown = styled(FaCaretDown)`
  height: 1.25rem;
  width: 1.25rem;
  fill: #a60321;
`;

export const DropdownContent = styled.div`
  position: absolute;
  left: 0;
  padding: 10px;
  font-weight: 500;
  color: #fff;
  width: 100%;
  cursor: pointer;
  z-index: 1;
  background: #121212;
  border-radius: 4px;
  max-height: 500px;
  overflow-y: scroll;
`;

export const DropdownItem = styled.div`
  z-index: 9;
  padding: 10px;
  &:hover {
    background: #222831;
  }
`;
