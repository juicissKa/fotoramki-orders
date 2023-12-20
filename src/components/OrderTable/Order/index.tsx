import { TableCell, TableRow } from "@mui/material";
import React from "react";

export type OrderType = {
  status: string;
  orderType: string;
  workName: string;
  client: string;
  phone: string;
  fullPrice: number;
  _id: string;
};

const STATUS_COLORS = new Map<string, string>();
STATUS_COLORS.set("На производстве", "#bad1f7");
STATUS_COLORS.set("Выдан", "#77eb75");
STATUS_COLORS.set("Отменён", "#ed3b3b");

const Order: React.FC<OrderType> = (order) => {
  const { status, orderType, workName, client, phone, fullPrice } = order;

  return (
    <TableRow>
      <TableCell sx={{ backgroundColor: STATUS_COLORS.get(status) }}>
        {status}
      </TableCell>
      <TableCell>{orderType}</TableCell>
      <TableCell>{workName}</TableCell>
      <TableCell>{client}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{fullPrice} ₽</TableCell>
    </TableRow>
  );
};

export default Order;
