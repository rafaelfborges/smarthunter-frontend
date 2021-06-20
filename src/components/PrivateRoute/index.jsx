import React, {useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";

import NavBar from "../NavBar";


export default function PrivateRoute({component: Component, ...rest}) {
  const { authenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return authenticated ? (
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
