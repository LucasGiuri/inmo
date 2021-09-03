import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

export const Dropdown = styled.div`
  width: 400px;
  margin-left: 0;
  margin-right: 10px;
  position: relative;
`;
export const DropdownBtn = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  background: #121212;
  border: 4px solid #a60321;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
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

`;
export const DropdownItem = styled.div`
  padding: 10px;
  &:hover {
      background: #222831;
  }
`;
