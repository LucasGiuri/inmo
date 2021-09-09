import styled from "styled-components";

export const WhatsAppIcon = styled.div`
  background-color: #00bb2d;
  position: fixed;
  bottom: 35px;
  line-height: 10px;
  padding: 10px;
  right: 15px;
  color: #25d366;
  border-radius: 50%;

  @media (max-width: 600px) {
    background-color: #00bb2d;
    position: fixed;
    width: 100%;
    padding: 10px;
    text-align: center;
    bottom: 0;
    border-radius: 0;
    right: 0;
    z-index: 9999;
  }
`;
