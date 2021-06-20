import React from "react";
import {Redirect, Route} from "react-router-dom";

import NavBar from "../NavBar";

export default function PrivateRoute({component: Component, ...rest}) {
  const isLogin = true;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          <>
            <NavBar/>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login"/>
        );
      }}
    />
  );
}
