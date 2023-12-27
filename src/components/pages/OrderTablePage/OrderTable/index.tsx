import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Order from "./Order";
import OrderSkeleton from "./Order/OrderSkeleton";
import { useGetOrdersQuery } from "../../../../redux/slices/orderApi";

const OrderTable = () => {
  const { data, error, isLoading } = useGetOrdersQuery("");

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
            <TableCell>Дата поступления заказа</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {error ? (
            <Typography>Ошибка при загрузке данных</Typography>
          ) : isLoading ? (
            [...Array(10)].map((order, index) => (
              <OrderSkeleton key={`orderSkeleton${index}`} />
            ))
          ) : (
            data && data.map((order) => <Order key={order._id} {...order} />)
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
