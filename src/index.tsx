import { ThemeProvaider } from "app/providers/ThemeProvider";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

render(
  <BrowserRouter>
    <ThemeProvaider>
      <App />
    </ThemeProvaider>
  </BrowserRouter>,
  document.getElementById("root")
);
