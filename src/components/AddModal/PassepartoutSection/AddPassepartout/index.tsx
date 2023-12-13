import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { handleNumberChange } from "../../../../utils/handleNumberChange";
import { handleTextChange } from "../../../../utils/handleTextChange";
import DeleteIcon from "@mui/icons-material/Delete";
import { PassepartoutString } from "../../FrameMoldingModal";
import { useAppDispatch } from "../../../../redux/store";
import {
  deletePassepartout,
  setPassepartoutCode,
  setPassepartoutHorizontalWidth,
  setPassepartoutPrice,
  setPassepartoutVerticalWidth,
} from "../../../../redux/slices/orderSlice";
import FastInput from "../../NumberInput";
import NumberInput from "../../NumberInput";

type AddPassepartoutType = {
  index: number;
};

const AddPassepartout: React.FC<AddPassepartoutType> = ({ index }) => {
  const dispatch = useAppDispatch();
  const widthRef = useRef();
  const heightRef = useRef();
  const priceRef = useRef();
  const codeRef = useRef();

  return (
    <Box sx={{ gap: 1, display: "flex", flexDirection: "column" }}>
      <Typography sx={{ width: "100%" }}>
        Паспарту {index + 1}
        <IconButton
          onClick={() => {
            dispatch(deletePassepartout(index));
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
            label="Расстояние по горизонтали"
            adornment="мм"
            inputRef={widthRef}
          />
        </Grid>
        <Grid item xs={6}>
          <NumberInput
            label="Расстояние по вертикали"
            adornment="мм"
            inputRef={heightRef}
          />
        </Grid>
        <Grid item xs={6}>
          <NumberInput
            label="Цена паспарту"
            adornment="руб"
            inputRef={priceRef}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Артикул паспарту" inputRef={codeRef} required />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddPassepartout;
