import React from "react";
import { FileInput } from "../../../../ui";

import { addDoc } from "../../models";

export const DocReaderButton = (props) => {
  return (
    <FileInput
      onChange={(val) => addDoc(val)}
      accept="image/jpeg, application/pdf"
    />
  );
};
