import React, { useState, useEffect, Fragment } from "react";
import { TextField, CircularProgress } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function CountriesSelect(props) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [controller] = useState(new AbortController());

  useEffect(() => {
    const searchCountry = async () => {
      setLoading(true);

      const data = JSON.stringify({
        query: inputValue,
      });

      try {
        const response = await fetch(
          "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/country",
          {
            signal: controller.signal,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Token a3d44f98b83bb90ac05edcccad11496c597f4f7b",
            },
            body: data,
          }
        );

        if (!response.ok) {
          throw Error("Request error", response.statusText);
        }

        const found = await response.json();

        if (!Array.isArray(found.suggestions)) {
          throw Error("Api error", found.message);
        }

        const countries = found.suggestions.map((i) => ({
          id: i.data.code,
          title: i.value,
        }));
        setOptions(countries);
      } catch (e) {
        setOptions([]);
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    searchCountry();
  }, [inputValue, controller]);

  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, [controller]);

  return (
    <Autocomplete
      {...props}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionSelected={(option, value) =>
        option && option.title === value.title
      }
      getOptionLabel={(option) => {
        return (option && option.title) || "";
      }}
      options={options}
      loading={loading}
      noOptionsText="Нет данных"
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Страна"
            placeholder="Начните вводить название..."
            fullWidth
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        );
      }}
    />
  );
}

export { CountriesSelect };
