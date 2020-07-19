import React from "react";
import { useStore } from "effector-react";
import { List } from "@material-ui/core";

import { DocsListItem } from "../../molecules";
import { $docs, removeDoc } from "../../models";

export const DocsList = (props) => {
  const docs = useStore($docs);

  if (!docs.length) {
    return null;
  }

  return (
    <List>
      {docs.map((item) => {
        const { id, mime, name, size } = item;
        const [, type] = mime.split("/");
        const remove = () => removeDoc(id);

        return (
          <DocsListItem
            key={id}
            title={name}
            size={size}
            type={type}
            remove={remove}
          />
        );
      })}
    </List>
  );
};
