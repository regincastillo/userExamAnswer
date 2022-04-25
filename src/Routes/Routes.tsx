import React, {FC} from "react";
import Header from "@Components/Header/Header";
import { Route, BrowserRouter as Router, Routes as Switch } from "react-router-dom";
import RoutesPath from "./RoutesPath";


const Routes: FC = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Header/>
        <Switch>
          {RoutesPath?.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;
