import {
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import Order, { OrderType } from "./Order";
import OrderSkeleton from "./Order/OrderSkeleton";

const OrderTable = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((res) => {
        setOrders(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
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
          {isLoading
            ? [...Array(10)].map(() => <OrderSkeleton />)
            : orders.map((order) => <Order key={order._id} {...order} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
