import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import OrderStringProp from "./OrderStringProp";
import { OrderPropsType } from "../../types";

type OrderPropsCategoryType = {
  label: string;
  rows: {
    key: keyof OrderPropsType;
    label: string;
    adornment?: string;
  }[];
  props: OrderPropsType;
};

const OrderPropsCategory: React.FC<OrderPropsCategoryType> = ({
  label,
  rows,
  props,
}) => {
  return (
    <Box>
      <Typography variant="h6">{label}</Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={10}
        sx={{ marginTop: "1px" }}
      >
        {rows.map(
          (row) =>
            props.hasOwnProperty(row.key) && (
              <OrderStringProp
                label={row.label}
                value={props[row.key]?.toString()}
                adornment={row.adornment}
              />
            )
        )}
      </Grid>
    </Box>
  );
};

export default OrderPropsCategory;
