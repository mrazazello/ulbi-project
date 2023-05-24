import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, themeToggle } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <div>
        <Link to="/">Main page</Link>
        <Link to="/about">About page</Link>
      </div>
      <div>
        <button onClick={themeToggle}>change theme</button>
      </div>
      <Suspense fallback={<div>Loading chunk</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
