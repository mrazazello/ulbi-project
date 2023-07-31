import { FC, lazy } from "react";
import { ILoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
  () =>
    new Promise((resolve) => {
      // временная заглушка чтобы видеть загрузку
      setTimeout(() => resolve(import("./LoginForm")), 1000);
    })
);
