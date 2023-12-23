import { Chip, TableCell, TableRow } from "@mui/material";
import React from "react";
import { ChipColor } from "../../types";
import {
  AccessTimeFilled,
  DoneAll,
  Engineering,
  Error,
} from "@mui/icons-material";

export type OrderType = {
  status: string;
  orderType: string;
  workName: string;
  client: string;
  phone: string;
  fullPrice: number;
  _id: string;
};

const STATUS_COLORS = new Map<
  string,
  {
    color: ChipColor;
    icon: any;
  }
>();
STATUS_COLORS.set("На производстве", {
  color: ChipColor.Primary,
  icon: <Engineering htmlColor="white" />,
});
STATUS_COLORS.set("Выдан", {
  color: ChipColor.Success,
  icon: <DoneAll htmlColor="white" />,
});
STATUS_COLORS.set("Отменён", {
  color: ChipColor.Error,
  icon: <Error htmlColor="white" />,
});
STATUS_COLORS.set("Ожидает выдачи", {
  color: ChipColor.Warning,
  icon: <AccessTimeFilled htmlColor="white" />,
});

const Order: React.FC<OrderType> = (order) => {
  const { status, orderType, workName, client, phone, fullPrice } = order;

  return (
    <TableRow>
      <TableCell>
        <Chip
          icon={STATUS_COLORS.get(status)?.icon}
          color={STATUS_COLORS.get(status)?.color}
          label={status}
        />
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
