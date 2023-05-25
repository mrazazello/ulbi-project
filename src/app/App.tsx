import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { classNames } from "shared/lib/classNames";

import "./styles/index.scss";

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
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
