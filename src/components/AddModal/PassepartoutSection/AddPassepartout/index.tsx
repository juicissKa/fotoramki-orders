import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "mui-rff";
import NumberInput from "../../../render/NumberInput";
import TextInput from "../../../render/TextInput";

type AddPassepartoutType = {
  index: number;
  remove: (...args: any[]) => any;
  name: string;
};

const AddPassepartout: React.FC<AddPassepartoutType> = ({
  name,
  index,
  remove,
}) => {
  return (
    <Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
      <Typography sx={{ width: "100%" }}>
        Паспарту {index + 1}
        <IconButton
          onClick={() => {
            remove("passepartouts", index);
          }}
        >
          <DeleteIcon
            sx={{
              color: "#f44336",
            }}
          ></DeleteIcon>
        </IconButton>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <NumberInput
            name={`${name}.width`}
            label="Расстояние по горизонтали"
            suffix="мм"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <NumberInput
            name={`${name}.height`}
            label="Расстояние по вертикали"
            suffix="мм"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <NumberInput
            name={`${name}.price`}
            label="Цена паспарту"
            suffix="₽"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextInput name={`${name}.code`} label="Артикул паспарту" required />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddPassepartout;
