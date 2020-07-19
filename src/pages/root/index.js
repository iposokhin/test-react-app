import React from "react";
import { useLocation } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { MainTemplate } from "../../ui";
import { Navbar } from "../../features/navbar";

const PagesRoot = props => {
  const location = useLocation();
  const { route } = props;
  const [match] = matchRoutes(route.routes, location.pathname);

  return (
    <MainTemplate header={match.route.header} sidebar={<Navbar />}>
      {renderRoutes(route.routes)}
    </MainTemplate>
  );
};

export { PagesRoot };
