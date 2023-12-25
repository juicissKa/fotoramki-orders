import { TableCell, TableRow } from "@mui/material";
import React from "react";
import Status from "./Status";
import { useNavigate } from "react-router-dom";

export type OrderType = {
  status: string;
  orderType: string;
  workName: string;
  client: string;
  phone: string;
  fullPrice: number;
  _id: string;
};

const Order: React.FC<OrderType> = (order) => {
  const { _id, status, orderType, workName, client, phone, fullPrice } = order;

  const navigate = useNavigate();

  return (
    <TableRow
      hover
      sx={{ cursor: "pointer" }}
      onClick={() => navigate(`/orders/${_id}`)}
    >
      <TableCell>
        <Status status={status} />
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
