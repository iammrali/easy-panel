import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useRoutes } from "react-router-dom";
import ROUTES from "../constants/routes";
import { theme } from '../theme';

function App() {
  const routing = useRoutes(ROUTES);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        {routing}
    </ThemeProvider>
  );
}

export default App;
