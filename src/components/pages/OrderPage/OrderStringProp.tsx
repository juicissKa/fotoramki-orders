import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

export type OrderStringPropType = {
  label: string;
  value?: string;
  adornment?: string;
};

const OrderStringProp: React.FC<OrderStringPropType> = ({
  label,
  value,
  adornment,
}) => {
  return (
    <Grid item xs={6}>
      <Stack direction="row">
        <Typography variant="body1" sx={{ width: "calc(50%)" }}>
          {label}
        </Typography>
        <Typography variant="body1" sx={{ float: "right" }}>
          {`${value}${adornment ? " " + adornment : ""}`}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default OrderStringProp;
