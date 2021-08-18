import WhatsApp from "@material-ui/icons/WhatsApp";
import styled from "styled-components";

export const WhatsAppIcon = styled(WhatsApp)`
  position: fixed;
  bottom: 35px;
  left: 35px;
  color: #25d366;
  font-size: 50px;

  @media (max-width: 600px) {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    bottom: 0;
  }
`;
