import { makeStyles } from "@material-ui/core/styles";
import { NAVBAR_WIDTH } from "../constants";

export const useEmptyLayoutStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://picsum.photos/800/600)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  },
}));

export const useLayoutStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar, // necessary for content to be below top bar
  content: {
    width: "100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.dark,
  },
}));

export const useTopBarStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${NAVBAR_WIDTH}px)`,
      marginLeft: NAVBAR_WIDTH,
    },
  },
}));

export const useNavBarStyles = makeStyles(() => ({
  root: {
    width: NAVBAR_WIDTH,
    flexShrink: 0,
  },
  paper: {
    width: NAVBAR_WIDTH,
  },
}));

export const useNavItemStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "flex-start",
    letterSpacing: 0,
    padding: "10px 8px",
    textTransform: "none",
    width: "100%",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  title: {
    marginRight: "auto",
  },
  active: {
    color: theme.palette.primary.main,
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
    },
    "& $icon": {
      color: theme.palette.primary.main,
    },
  },
}));

export const useUserProfileStyles = makeStyles({
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

export const usePageStyles = makeStyles((theme) => ({
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

export const useLoginStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.only("xs")]: {
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 8),
    },
    display: "grid",
    placeItems: "center",
    placeContent: "center",
    height: "100vh",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  rememberMe: {
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));