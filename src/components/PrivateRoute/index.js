import React, { useState } from "react";

import { Route } from "react-router-dom";

import { useSelector } from "react-redux";

import LandingPage from "../LandingPage";
import Loading from "../Loading";

export default function PrivateRoute({ component: RouteComponent, ...rest }) {
  const [token, setToken] = useState("");

  useSelector(
    async state =>
      (await state.firebase.auth.stsTokenManager) &&
      state.firebase.auth.stsTokenManager.accessToken
  ).then(res => setToken(res));

  const loaded = useSelector(state => state.firebase.profile.isLoaded);

  return (
    <Route
      {...rest}
      render={routeProps => {
        return token ? (
          <RouteComponent {...routeProps} />
        ) : loaded && !token ? (
          <LandingPage />
        ) : (
          <Loading />
        );
      }}
    />
  );
}
