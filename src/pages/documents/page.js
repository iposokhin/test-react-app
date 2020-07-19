import React from "react";
import { DocReaderButton, DocsList } from "../../features/documents";

const DocumentsPage = (props) => {
  return (
    <div>
      <h1>Страница документов</h1>
      <DocReaderButton />
      <DocsList />
    </div>
  );
};

export { DocumentsPage };
