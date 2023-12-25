import React from "react";
import { useParams } from "react-router-dom";
import { useGetOrderByIdQuery } from "../../../redux/slices/orderApi";
import { Box, Container, Skeleton, Typography } from "@mui/material";
import Status from "../OrderTablePage/OrderTable/Order/Status";

const OrderPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetOrderByIdQuery(id ? id : "");

  return error ? (
    <Typography>Ошибка</Typography>
  ) : isLoading ? (
    <Skeleton />
  ) : data ? (
    <Container>
      <Typography variant="h4">Заказ № {data._id}</Typography>
      <Status status={data.status} />
    </Container>
  ) : (
    <Typography>Ничего не найдено!</Typography>
  );
};

export default OrderPage;
