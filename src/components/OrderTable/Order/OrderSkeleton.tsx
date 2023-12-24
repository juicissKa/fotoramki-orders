import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

const OrderSkeleton: React.FC = () => {
  return (
    <TableRow>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
      <TableCell>
        <Skeleton />
      </TableCell>
    </TableRow>
  );
};

export default OrderSkeleton;
