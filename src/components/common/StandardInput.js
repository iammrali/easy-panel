import TextField from "@material-ui/core/TextField";
import React from "react";

export const StandardInput = ({ name, value, valueSetter, ...rest }) => {
  const handleInputChange = ({ target }) => {
    const _value = { ...value };
    _value[name] = target.value;
    valueSetter(_value);
  };
  console.log(rest);
  return (
    <TextField
      margin="normal"
      id={name}
      value={valueSetter[name]}
      onChange={handleInputChange}
      {...rest}
    />
  );
};
