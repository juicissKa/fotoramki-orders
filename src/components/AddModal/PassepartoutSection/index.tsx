import { Button, Grid } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import AddPassepartout from "./AddPassepartout";
import { addPassepartout } from "../../../redux/slices/orderSlice";

const PassepartoutSection = () => {
  const dispatch = useAppDispatch();
  const passepartouts = useAppSelector((state) => state.order.passepartouts);

  return (
    <>
      <Grid item xs={12}>
        {passepartouts?.map((passepartout, index) => (
          <AddPassepartout
            key={`${passepartout.code}${index}`}
            {...{
              index,
            }}
          />
        ))}
      </Grid>
      <Grid item xs={12}>
        <Button
          sx={{ width: "100%" }}
          onClick={() => {
            dispatch(addPassepartout());
          }}
        >
          Добавить паспарту
        </Button>
      </Grid>
    </>
  );
};

export default PassepartoutSection;
