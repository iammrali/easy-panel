import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../../components/common/Form";
import { StandardInput } from "../../components/common/StandardInput";
import messageResource from "../../constants";
import authenticate from "../../services/auth/authenticateService";
import toast from "../../services/toastService";
import { useLoginStyles } from "../../styles";

const LoginView = () => {
  const classes = useLoginStyles();
  const [user, setUser] = useState({ username: "", password: "" });
  const location = useLocation();

  const handleSubmit = async () => {
    try {
      await authenticate.login(user);
      window.location = location.state ? location.state.from : "/";
    } catch (error) {
      if (error.response && error.response.status === 400)
        toast.error(messageResource.invalidLogin, { persist: true });
    }
  };

  authenticate.logout();

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {messageResource.login}
      </Typography>
      <Form className={classes.form} onSubmit={handleSubmit} submitLabel={messageResource.submit}>
        <StandardInput
          name="username"
          label={messageResource.username}
          value={user}
          valueSetter={setUser}
          required
          fullWidth
          />
        <StandardInput
          name="password"
          label={messageResource.password}
          value={user}
          valueSetter={setUser}
          required
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={messageResource.rememberMe}
          className={classes.rememberMe}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {messageResource.login}
        </Button>
      </Form>
    </div>
  );
};

export default LoginView;
