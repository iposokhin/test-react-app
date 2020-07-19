import React from "react";
import { TextField } from "@material-ui/core";

const CommentInput = props => {
  return (
    <TextField
      label="Комментарий"
      multiline
      fullWidth
      rows="10"
      variant="outlined"
      placeholder="Любит смотреть котиков"
      {...props}
    />
  );
};

export { CommentInput };
