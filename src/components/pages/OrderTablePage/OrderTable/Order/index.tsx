import { TableCell, TableRow } from "@mui/material";
import React from "react";
import Status from "./Status";
import { useNavigate } from "react-router-dom";
import { OrderType } from "../../../../types";

const Order: React.FC<OrderType> = (order) => {
  const {
    _id,
    status,
    orderType,
    workName,
    client,
    phone,
    fullPrice,
    createdAt,
  } = order;

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
      <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
    </TableRow>
  );
};

export default Order;
