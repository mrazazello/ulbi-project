import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./theme/ThemeProvaider";

render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
