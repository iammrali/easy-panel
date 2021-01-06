import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Slide from "@material-ui/core/Slide";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import { PropTypes } from "prop-types";
import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import messageResource from "../../../../constants";
import { useNavItemStyles } from "../../../../styles";

const NavItem = ({ className, href, icon: Icon, title, timeout, ...rest }) => {
  const classes = useNavItemStyles();

  return (
    <ListItem
      className={`${classes.item} ${className}`}
      disableGutters
      {...rest}
    >
      <Slide direction="left" in={true} timeout={timeout}>
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={RouterLink}
          to={href}
        >
          <Icon className={classes.icon} size="20" />
          <span className={classes.title}>{title}</span>
        </Button>
      </Slide>
    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

NavItem.defaultProps = {
  className: "",
  href: "/",
  icon: DescriptionOutlinedIcon,
  title: messageResource.menu,
};

export default NavItem;
