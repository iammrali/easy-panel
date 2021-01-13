import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  page: {
    maxHeight: 1,
    minHeight: "calc(100vh - 64px)",
    overflow: "auto",
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.between("sm", "lg")]: {
      padding: theme.spacing(3),
    },
  },
}));

const Page = ({ className, children, title, ...rest }) => {
  const classes = useStyles();

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
