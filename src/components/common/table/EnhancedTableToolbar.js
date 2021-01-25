import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useToolbarStyles } from "./EnhancedTableStyles";

const EnhancedTableToolbar = ({ title, id = "enhanced-table", children }) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        id={id}
        component="div"
      >
        {title}
      </Typography>

      {children}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
