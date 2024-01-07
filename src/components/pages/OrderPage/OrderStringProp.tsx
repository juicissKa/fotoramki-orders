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
      <Stack
        direction="row"
        sx={{
          ".MuiTypography-root:first-of-type:after": {
            content:
              '"..............................................................................................."',
            overflow: "hidden",
            marginLeft: "10px",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            width: "calc(50%)",
            whiteSpace: "nowrap",
            float: "left",
            overflow: "hidden",
          }}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          sx={{ float: "right", fontWeight: "500", marginLeft: "10px" }}
        >
          {`${value}${adornment ? " " + adornment : ""}`}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default OrderStringProp;
