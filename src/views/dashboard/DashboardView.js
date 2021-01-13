import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Page from "../../components/common/Page";
import Budget from "./Budget";
import TasksProgress from "./TasksProgress";
import TotalCustomers from "./TotalCustomers";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      padding: 0,
    },
    [theme.breakpoints.between("sm", "lg")]: {
      padding: theme.spacing(3),
    },
  },
}));

const DashboardView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root}>
      <Grid container spacing={1}>
        <Grid item lg={4} sm={6} xl={4} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={4} sm={6} xl={4} xs={12}>
          <TotalCustomers />
        </Grid>
        <Grid item lg={4} sm={6} xl={4} xs={12}>
          <TasksProgress />
        </Grid>
      </Grid>
    </Page>
  );
};

export default DashboardView;
