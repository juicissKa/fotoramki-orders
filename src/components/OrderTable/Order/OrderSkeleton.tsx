import { Skeleton, TableCell, TableRow } from "@mui/material";
import React from "react";

const OrderSkeleton: React.FC = () => {
  return (
    <TableRow>
      {[...Array(6)].map(() => (
        <TableCell>
          <Skeleton />
        </TableCell>
      ))}
    </TableRow>
  );
};

export default OrderSkeleton;
