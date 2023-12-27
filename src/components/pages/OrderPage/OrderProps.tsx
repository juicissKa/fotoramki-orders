import React from "react";
import { OrderPropsType } from "../../types";
import { Box, Grid, Typography } from "@mui/material";
import OrderStringProp from "./OrderStringProp";

const orderPropsComponents: {
  key: keyof OrderPropsType;
  label: string;
  adornment?: string;
}[] = [
  { key: "width", label: "Ширина", adornment: "мм" },
  { key: "height", label: "Длина", adornment: "мм" },
  { key: "base", label: "Ширина багета", adornment: "мм" },
  { key: "price", label: "Цена за п/м", adornment: "₽" },
  { key: "code", label: "Артикул" },
  { key: "glass", label: "Стекло" },
  { key: "back", label: "Задник" },
];

const OrderProps: React.FC<OrderPropsType> = (props) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h6">Основные свойства</Typography>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={10}
        sx={{ marginTop: "1px" }}
      >
        {orderPropsComponents.map(
          (comp) =>
            props.hasOwnProperty(comp.key) && (
              <OrderStringProp
                label={comp.label}
                value={props[comp.key]?.toString()}
                adornment={comp.adornment}
              />
            )
        )}
      </Grid>
    </Box>
  );
};

export default OrderProps;
