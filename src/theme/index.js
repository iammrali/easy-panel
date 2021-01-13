import indigo from "@material-ui/core/colors/indigo";
import { faIR } from "@material-ui/core/locale";
import { createMuiTheme, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import "./webyekan.css";

export const theme = createMuiTheme(
  {
    direction: "rtl",
    palette: {
      background: {
        dark: "#F4F6F8",
      },
      sign: {
        main: indigo[300],
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "YekanWeb !important",
      h5: {
        fontSize: "1.2rem",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": "YekanWeb !important",
          ".custom-scrollbar::-webkit-scrollbar": {
            width: 11,
          },
          ".custom-scrollbar::-webkit-scrollbar-track": {
            background: "#eee",
          },
          ".custom-scrollbar::-webkit-scrollbar-thumb": {
            "background-color": "#90A4AE",
            "border-radius": 4,
            border: "3px solid #eee",
          },
          ".MuiSnackbar-root button": {
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
          ".CardHeader-mini": {
            "& .MuiCardHeader-root": {
              padding: "8px 16px",
            },
          },
        },
      },
      MuiCardHeader: {
        subheader: {
          fontSize: "0.9rem",
        },
      },
      MuiCardActions: {
        root: {
          padding: 16,
        },
      },
      MuiChip: {
        sizeSmall: {
          flip: false,
          height: 22,
          fontSize: "smaller",
          margin: "6px 0 6px 4px",
          padding: "0 4px",
        },
      },
    },
  },
  faIR
);

export const style = create({
  plugins: [...jssPreset().plugins, rtl()],
});
