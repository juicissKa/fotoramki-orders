import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../../redux/slices/orderApi";
import { Box, Container, Skeleton, Stack, Typography } from "@mui/material";
import Status from "../OrderTablePage/OrderTable/Order/Status";
import OrderProps from "./OrderProps";

const OrderPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetOrderByIdQuery(id ? id : "");

  return error ? (
    <Typography>Ошибка</Typography>
  ) : isLoading ? (
    <Skeleton />
  ) : data ? (
    <Container>
      <Stack spacing={1}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Заказ № {data._id}
        </Typography>
        <Typography variant="body1">
          от {new Date(data.createdAt).toLocaleDateString()}
        </Typography>
        <Typography variant="h5">
          {data.orderType}, {data.workName}
        </Typography>
        <Status status={data.status} />
      </Stack>

      <OrderProps {...data.orderProps} />
    </Container>
  ) : (
    <Typography>Ничего не найдено!</Typography>
  );
};

export default OrderPage;
