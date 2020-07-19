import React, { Fragment } from "react";
import { CommentsTable } from "../../features/comments";

const MainPage = (props) => {
  return (
    <Fragment>
      <h1>Главная страница</h1>
      <CommentsTable />
    </Fragment>
  );
};

export { MainPage };
