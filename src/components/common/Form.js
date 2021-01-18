import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "block",
  },
}));

export const Form = ({ onSubmit, submitLabel, children, ...rest }) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };

  const hasSubmit = children.some((c) => c.props.type === "submit");

  return (
    <form onSubmit={handleSubmit} {...rest}>
      {children}

      {!hasSubmit && (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {submitLabel}
        </Button>
      )}
    </form>
  );
};
