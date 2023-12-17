import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import AddPassepartout from "./AddPassepartout";
import { FieldArray } from "react-final-form-arrays";
import { push } from "final-form-arrays";

const PassepartoutSection: React.FC<{ mutators: any }> = ({ mutators }) => {
  return (
    <Grid item xs={12}>
      <FieldArray name="passepartouts">
        {({ fields }) =>
          fields.map((name, index) => (
            <AddPassepartout {...{ name, index, remove: mutators.remove }} />
          ))
        }
      </FieldArray>

      <Button
        sx={{ width: "100%" }}
        onClick={() => mutators.push("passepartouts", undefined)}
      >
        Добавить паспарту
      </Button>
    </Grid>
  );
};

export default PassepartoutSection;
