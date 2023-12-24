import { Chip, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import { ChipColor } from "../../types";
import Status from "./Status";
import { Delete } from "@mui/icons-material";
import { useDeleteOrderMutation } from "../../../redux/slices/orderApi";
import { useAppDispatch } from "../../../redux/store";
import { openSnack } from "../../../redux/slices/formSlice/slice";

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
  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    deleteOrder(_id)
      .then((res) => {
        dispatch(openSnack({ text: "Заказ успешно удалён!", type: "success" }));
      })
      .catch((err) => {
        dispatch(
          openSnack({ text: "Ошибка! Заказ не был удалён!", type: "error" })
        );
      });
  };

  return (
    <TableRow
      hover
      sx={{ cursor: "pointer" }}
      onClick={() => console.log("clicked")}
    >
      <TableCell>
        <Status status={status} />
      </TableCell>
      <TableCell>{orderType}</TableCell>
      <TableCell>{workName}</TableCell>
      <TableCell>{client}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{fullPrice} ₽</TableCell>
      <TableCell>
        <IconButton onClick={handleDelete} disabled={isLoading}>
          <Delete
            sx={{
              color: "#f44336",
            }}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Order;
