import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import React, { useState } from "react";
import messageResource from "../../../constants";
import { useTopBarStyles } from '../../../styles';

const TopBar = ({ onNavOpenInMobile }) => {
  const classes = useTopBarStyles();
  const [notifications] = useState([]);

  return (
    <AppBar position="fixed" elevation={0} className={classes.root}>
      <Toolbar>
        <DashboardRoundedIcon fontSize="large" />
        <Box component="span" fontWeight={500} pl={1}>
          {messageResource.appTitle}
        </Box>
        <Box flexGrow={1} />
        <Hidden mdDown>
          <Tooltip title={messageResource.notifications} aria-label="notifications">
            <IconButton color="inherit">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onNavOpenInMobile}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
