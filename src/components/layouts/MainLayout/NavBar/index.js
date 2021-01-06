import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../../../../services/auth/authenticateService";
import { useNavBarStyles } from "../../../../styles";
import { Content } from "./Content";
import { items } from "./navItems";

const NavBar = ({ onCloseInMobile, openMobile }) => {
  const classes = useNavBarStyles();
  const location = useLocation();
  const user = getCurrentUser();

  useEffect(() => {
    if (openMobile && onCloseInMobile) onCloseInMobile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Hidden lgUp>
        <Drawer
          className={classes.root}
          classes={{ paper: classes.paper }}
          anchor="left"
          onClose={onCloseInMobile}
          open={openMobile}
          variant="temporary"
        >
          <Content items={items} user={user} />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          className={classes.root}
          classes={{ paper: classes.paper }}
          anchor="left"
          open
          variant="persistent"
        >
          <Content items={items} user={user} />
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.defaultProps = {
  onCloseInMobile: () => {},
  openMobile: false,
};

export default NavBar;
