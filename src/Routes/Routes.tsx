import React, { FC } from "react";
import Header from "@Components/Header/Header";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import RoutesPath from "./RoutesPath";
import Loading from "@Components/Loading/Loading";

const Routes: FC = () => {
  return (
    <Router>
      <Header />
      <React.Suspense fallback={<Loading />}>
        <Switch>
          {RoutesPath?.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default Routes;
