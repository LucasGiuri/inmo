import styled from "styled-components";
import WhatsApp from "@material-ui/icons/WhatsApp";

export const WhatsAppIcon = styled(WhatsApp)`
  background-color: white;
  position: fixed;
  bottom: 35px;
  right: 15px;
  color: #25d366;
  font-size: 50px;
  border-radius: 50%;
  background-size: 80px 80px;

  @media (max-width: 600px) {
    color: #fff;
    background-color: green;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    bottom: 0;
    border-radius: 0;
    right: 0;
  }
`;
