import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useDeleteOrderMutation,
  useGetOrderByIdQuery,
} from "../../../redux/slices/orderApi";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Status from "../OrderTablePage/OrderTable/Order/Status";
import OrderProps from "./OrderProps";
import { Delete, Edit } from "@mui/icons-material";

const OrderPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetOrderByIdQuery(id ? id : "");
  const [deleteOrder, deletionProps] = useDeleteOrderMutation();
  const [deletionOpen, setDeletionOpen] = useState(false);

  const openDeletionDialog = () => {
    setDeletionOpen(true);
  };

  const handleDeletionClose = () => {
    setDeletionOpen(false);
  };

  const handleDelete = () => {
    return id ? deleteOrder(id) : null;
  };

  return error ? (
    <Typography>Ошибка</Typography>
  ) : isLoading ? (
    <Skeleton />
  ) : data ? (
    <Container>
      <Dialog open={deletionOpen}>
        <DialogTitle>{"Вы действительно хотите удалить заказ?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleDeletionClose} autoFocus>
            Отмена
          </Button>
          <Button onClick={handleDelete} color="error">
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
      <Stack spacing={1}>
        <Stack direction={"row"}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Заказ № {data._id}
          </Typography>
          <IconButton onClick={openDeletionDialog}>
            <Delete color="error"></Delete>
          </IconButton>
          <IconButton>
            <Edit></Edit>
          </IconButton>
        </Stack>

        <Typography variant="body1">
          от {new Date(data.createdAt).toLocaleDateString()}
        </Typography>
        <Status status={data.status} />
      </Stack>
      <Stack spacing={1} sx={{ marginTop: 4 }}>
        <Typography variant="h4">{data.workName}</Typography>
        <Typography variant="h5">{data.orderType}</Typography>
      </Stack>

      <OrderProps {...data.orderProps} />
    </Container>
  ) : (
    <Typography>Ничего не найдено!</Typography>
  );
};

export default OrderPage;
