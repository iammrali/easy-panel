import { jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";

export const style = create({
  plugins: [...jssPreset().plugins, rtl()],
});
