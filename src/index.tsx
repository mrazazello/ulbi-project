import { ThemeProvaider } from "app/providers/themeProvider";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

import { ErrorBoundary } from "app/providers/errorBoundary";
import "shared/config/i18n/i18n";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvaider>
        <App />
      </ThemeProvaider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
