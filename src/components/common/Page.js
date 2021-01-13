import Box from "@material-ui/core/Box";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { usePageStyles } from "../../styles";

const Page = ({ className, children, title, ...rest }) => {
  const classes = usePageStyles();

  return (
    <Box
      {...rest}
      className={clsx(classes.page, "custom-scrollbar", className)}
    >
      {children}
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
