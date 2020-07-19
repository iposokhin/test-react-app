import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { CountriesSelect } from "../../../cities-select";
import { EmailInput, CommentInput } from "../../../../ui";
import { addComment } from "../../models";

export const CommentForm = (props) => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: { email: "", country: "", comment: "" },
  });

  const onSubmit = (values) => {
    addComment(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Controller as={EmailInput} control={control} name="email" />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={CountriesSelect}
                control={control}
                name="country"
                onChange={([, value]) => value}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller as={CommentInput} control={control} name="comment" />
        </Grid>
      </Grid>
      <Button
        style={{ width: 200, marginTop: 20 }}
        variant="contained"
        color="primary"
        type="submit"
      >
        Добавить
      </Button>
    </form>
  );
};
