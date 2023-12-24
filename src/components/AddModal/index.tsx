import {
  Alert,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import FrameMoldingModal from "./FrameMoldingModal";
import BackframeModal from "./BackframeModal";
import BoxModal from "./BoxModal";
import PassepartoutModal from "./PassepartoutModal";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { closeModal } from "../../redux/slices/formSlice/slice";

type Product = {
  name: string;
  value: string;
};

const products: Product[] = [
  { name: "Оформление в багет", value: "frame_molding" },
  { name: "Оформление в короб", value: "box" },
  { name: "Подрамник", value: "backframe" },
  { name: "Паспарту", value: "passepartout" },
];

const PRODUCT_VIEWS: Record<string, React.FC> = {
  frame_molding: FrameMoldingModal,
  box: BoxModal,
  backframe: BackframeModal,
  passepartout: PassepartoutModal,
};

const AddModal: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState(products[0].value);
  const CurrentForm = PRODUCT_VIEWS[currentProduct];

  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.form.modalOpen);

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    setCurrentProduct(e.target.value as string);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack padding={2}>
        <FormControl>
          <InputLabel id="orderType">Вид заказа</InputLabel>
          <Select
            label={"Вид заказа"}
            labelId={"orderType"}
            value={currentProduct}
            onChange={handleSelectChange}
          >
            {products.map((product, index) => (
              <MenuItem key={`productType${index}`} value={product.value}>
                {product.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <CurrentForm />
    </Dialog>
  );
};

export default AddModal;
