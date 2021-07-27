import { Link } from "@material-ui/core";
import WhatsApp from "@material-ui/icons/WhatsApp";
import styled from "styled-components";

const StyledWhatsAppIcon = styled(WhatsApp)`
position: fixed;
bottom: 35px;
left: 35px;
color: #25D366;
font-size: 50px;

@media (max-width: 600px) {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    bottom: 0;
  }
` 

export const WhatsappLinked = ({ link }) => (
    <Link href={link}>
        <StyledWhatsAppIcon />
    </Link>
);