import React from "react";
import { OrderPropsType, Passepartout } from "../../types";
import { Box, Grid, Stack, Typography } from "@mui/material";
import OrderStringProp from "./OrderStringProp";
import OrderPropsCategory from "./OrderPropsCategory";

const mainRows: {
  key: keyof OrderPropsType;
  label: string;
  adornment?: string;
}[] = [
  { key: "width", label: "Ширина", adornment: "мм" },
  { key: "height", label: "Длина", adornment: "мм" },
  { key: "base", label: "Ширина багета", adornment: "мм" },
  { key: "price", label: "Цена за п/м", adornment: "₽" },
  { key: "code", label: "Артикул" },
];

const accessoriesRows: {
  key: keyof OrderPropsType;
  label: string;
  adornment?: string;
}[] = [
  { key: "glass", label: "Стекло" },
  { key: "back", label: "Задник" },
];

const passepartoutRows: {
  key: keyof Passepartout;
  label: string;
  adornment?: string;
}[] = [
  { key: "width", label: "Расстояние по горизонтали", adornment: "мм" },
  { key: "height", label: "Расстояние по вертикали", adornment: "мм" },
  { key: "price", label: "Цена за п/м", adornment: "₽" },
  { key: "code", label: "Артикул" },
];

const OrderProps: React.FC<OrderPropsType> = (props) => {
  return (
    <Stack sx={{ marginTop: 3 }} spacing={5}>
      <OrderPropsCategory
        label="Основные свойства"
        props={props}
        rows={mainRows}
      />
      <OrderPropsCategory
        label="Аксессуары"
        props={props}
        rows={accessoriesRows}
      />
      {props.passepartouts &&
        props.passepartouts.map((passepartout, index) => (
          <OrderPropsCategory
            key={`OrderPropsCategory${index}`}
            label={`Паспарту ${index + 1}`}
            props={passepartout}
            rows={passepartoutRows}
          />
        ))}
    </Stack>
  );
};

export default OrderProps;
