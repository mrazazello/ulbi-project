import { getUserAuthData } from "entities/user";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { routePath } from "shared/config/routeConfig/routeConfig";

interface IProps {}

export const RequireAuth: FC<IProps> = (props) => {
  const { children } = props;
  const location = useLocation();
  const auth = useSelector(getUserAuthData);

  return auth ? (
    <>{children}</>
  ) : (
    <Navigate to={routePath.main} state={{ from: location }} replace />
  );
};
