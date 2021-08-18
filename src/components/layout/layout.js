import React from "react";
import PropTypes from "prop-types";
import { LayoutContainer } from "./layout.styles";

function Layout({ children, ...restOfProps }) {
  return <LayoutContainer {...restOfProps}>{children}</LayoutContainer>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
