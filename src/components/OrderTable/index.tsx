import {
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import Order, { OrderType } from "./Order";
import OrderSkeleton from "./Order/OrderSkeleton";
import { Status } from "../types";

const OrderTable = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const [loadingStatus, setLoadingStatus] = useState<Status>(Status.Loading);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((res) => {
        setOrders(res.data);
        setLoadingStatus(Status.Fulfilled);
      })
      .catch((err) => {
        console.log(err);
        setLoadingStatus(Status.Rejected);
      });
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Статус</TableCell>
            <TableCell>Вид заказа</TableCell>
            <TableCell>Название работы</TableCell>
            <TableCell>ФИО клиента</TableCell>
            <TableCell>Номер телефона</TableCell>
            <TableCell>Общая стоимость</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loadingStatus === Status.Rejected ? (
            <Typography>Ошибка при загрузке данных</Typography>
          ) : loadingStatus === Status.Loading ? (
            [...Array(10)].map(() => <OrderSkeleton />)
          ) : (
            orders.map((order) => <Order key={order._id} {...order} />)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
