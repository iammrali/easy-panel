import {
  Avatar,
  Box,
  Card,
  CardContent,




  colors, Grid,
  LinearProgress,

  makeStyles, Typography
} from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

const TasksProgress = ({ ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TASKS PROGRESS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              75.5%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box mt={3}>
          <LinearProgress
            value={75.5}
            variant="determinate"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

TasksProgress.propTypes = {
  className: PropTypes.string
};

export default TasksProgress;
