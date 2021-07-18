import React from "react";
import PropTypes from "prop-types";
import bedIcon from "../../assets/bedIcon.png";
import carIcon from "../../assets/carIcon.png";
import bathIcon from "../../assets/bathIcon.png";
import m2Icon from "../../assets/m2Icon.png";
import { Img } from "./icon.styles";

function Icon({ name, size }) {
  const iconSrc = {
    bed: bedIcon,
    m2: m2Icon,
    bath: bathIcon,
    car: carIcon,
  };
  return <Img src={iconSrc[name]} size={size} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Icon;