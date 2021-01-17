import { Button } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React from "react";
import messageResource from "../constants";

const InnerSnackbarUtilsConfigurator = (props) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef;
const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  );
};

const dismissBtn = (key) => (
  <Button
    onClick={() => {
      useSnackbarRef.closeSnackbar(key);
    }}
  >
    {messageResource.ok}
  </Button>
);

const _toast = (msg, options = {}) => {
  if (options.persist) options.action = dismissBtn;
  options.preventDuplicate = true;

  useSnackbarRef.enqueueSnackbar(msg, options);
};

const success = (msg, options = {}) =>
  _toast(msg, { ...options, variant: "success" });

const warning = (msg, options = {}) =>
  _toast(msg, { ...options, variant: "warning" });

const info = (msg, options = {}) =>
  _toast(msg, { ...options, variant: "info" });

const error = (msg, options = {}) =>
  _toast(msg, { ...options, variant: "error" });

const toast = {
  success,
  info,
  warning,
  error,
};

export default toast;
