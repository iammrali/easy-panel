import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { useRoutes } from "react-router-dom";
import ROUTES from "../constants/routes";
import { SnackbarUtilsConfigurator } from "../services/toastService";
import { theme } from "../theme";

function App() {
  const routing = useRoutes(ROUTES);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider domRoot={document.getElementById("snackbar")}>
        <SnackbarUtilsConfigurator />
        {routing}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
