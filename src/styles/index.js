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
