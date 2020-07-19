import React, { useRef } from "react";
import { Button } from "@material-ui/core";
import { useFileReader } from "../../../hooks";

export const FileInput = (props) => {
  const { onChange = () => null, ...rest } = props;
  const { readResult, read } = useFileReader();
  const inputRef = useRef(null);

  React.useEffect(() => {
    if (!!readResult) {
      onChange(readResult);
    }
  }, [readResult, onChange]);

  return (
    <label>
      <input
        ref={inputRef}
        onChange={(e) => {
          read(e);
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }}
        type="file"
        style={{ display: "none" }}
        {...rest}
      />
      <Button variant="contained" color="primary" component="span">
        Загрузить файл
      </Button>
    </label>
  );
};
