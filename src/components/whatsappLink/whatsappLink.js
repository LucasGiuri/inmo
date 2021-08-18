import React from "react";
import { Link } from "@material-ui/core";
import { WhatsAppIcon } from "./whatsappLink.styles";
import PropTypes from "prop-types";

const WhatsappLink = ({ link }) => (
  <Link href={link} target="_blank">
    <WhatsAppIcon />
  </Link>
);

WhatsappLink.propTypes = {
  link: PropTypes.string,
};

WhatsappLink.defaultProps = {
  link: "",
};

export default WhatsappLink;
