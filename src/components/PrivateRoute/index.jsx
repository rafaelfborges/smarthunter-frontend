import React from "react";
import { Route, Redirect } from "react-router-dom";

import NavBar from "../NavBar";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = true;

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          <>
            <NavBar />
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
