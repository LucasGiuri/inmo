import React from "react";
import WhatsApp from "@material-ui/icons/WhatsApp";
import { Link } from "@material-ui/core";
import { WhatsAppIcon } from "./whatsappLink.styles";
import PropTypes from "prop-types";

const WhatsappLink = ({ link }) => (
  <Link href={link} target="_blank">
    <WhatsAppIcon>
      <WhatsApp style={{ fontSize: 50, color: '#fff' }} />
    </WhatsAppIcon>
  </Link>
);

WhatsappLink.propTypes = {
  link: PropTypes.string,
};

WhatsappLink.defaultProps = {
  link: "",
};

export default WhatsappLink;
