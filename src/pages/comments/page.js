import React, { Fragment } from "react";
import { CommentForm } from "../../features/comments";

const CommentsPage = (props) => {
  return (
    <Fragment>
      <h1>Страница комментариев</h1>
      <CommentForm />
    </Fragment>
  );
};

export { CommentsPage };
