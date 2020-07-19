import React from "react";

export const useFileReader = () => {
  const [readResult, setResult] = React.useState("");

  const read = (event) => {
    const file = event.target.files[0];

    if (!(file instanceof Blob)) return;

    setResult({
      file: file,
      name: file.name,
      mime: file.type,
      size: file.size,
    });
  };

  return { read, readResult };
};
