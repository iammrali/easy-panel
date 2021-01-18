import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import PropTypes from "prop-types";
import React from "react";

export const useStyles = makeStyles({
  noUser: {
    display: "flex",
    placeContent: "center",
    alignItems: "center",
    minHeight: 64,
  },
  avatar: {
    cursor: "pointer",
    width: 45,
    height: 45,
  },
  username: {
    textTransform: "uppercase",
    marginTop: 10,
  },
});

const UserProfile = ({ user, children }) => {
  const classes = useStyles();

  if (!user)
    return (
      <Box className={classes.noUser}>
        <PersonAddDisabledIcon />
      </Box>
    );

  return (
    <Box alignItems="center" display="flex" flexDirection="column" p={2}>
      <FingerprintIcon className={classes.avatar} />
      <Typography className={classes.username} color="textPrimary" variant="h5">
        {user.userName}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {user.title}
      </Typography>

      {children}
    </Box>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default UserProfile;
