import { lighten, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    position: "relative",
  },
  table: {
    minWidth: 750,
  },
  backDrop: {
    position: "absolute",
    zIndex: theme.zIndex.drawer + 1,
    color: "#444",
    "backdrop-filter": "blur(3px)",
    "background-color": "rgba(0, 0, 0, 0.2)",
  },
}));

export const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight: {
    color: theme.palette.secondary.main,
    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
  },
  title: {
    flex: "1 1 100%",
  },
}));

export const useTableCellStyles = makeStyles((theme) => ({
  cellWithTag: {
    flip: false,
    position: "relative",
    padding: theme.spacing(2, 2, 0, 3),
  },
  extraTag: {
    flip: false,
    display: "inline-block",
    width: "auto",
    height: 28,
    backgroundColor: theme.palette.success.main,
    borderRadius: "3px 0 0 3px",
    borderLeft: `1px solid ${theme.palette.success.main}`,
    position: "absolute",
    top: "-1px",
    right: 0,
    color: "white",
    fontWeight: 300,
    fontSize: 12,
    lineHeight: "28px",
    padding: "0 10px 0 10px",
    "&:before": {
      flip: false,
      content: '""',
      position: "absolute",
      display: "block",
      left: -14,
      width: 0,
      height: 0,
      borderTop: "14px solid transparent",
      borderBottom: "14px solid transparent",
      borderRight: `14px solid ${theme.palette.success.main}`,
    },
  },
}));

export default useStyles;
