import React, {useContext} from "react";
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext";

import NavBar from "../NavBar";
import Loading from "../Loading";


export default function PrivateRoute({component: Component, ...rest}) {
  const { loading, authenticated } = useContext(AuthContext);

  return loading ? (
    <Loading />
  ) : (
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
