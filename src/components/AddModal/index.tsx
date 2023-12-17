import {
  Button,
  Dialog,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import FrameMoldingModal from "./FrameMoldingModal";
import BackframeModal from "./BackframeModal";
import BoxModal from "./BoxModal";
import PassepartoutModal from "./PassepartoutModal";
import { handleTextChange } from "../../utils/handleTextChange";
import { Field, Form } from "react-final-form";
import { TextField } from "mui-rff";

import arrayMutators from "final-form-arrays";

type Product = {
  name: string;
  value: string;
};

const products: Product[] = [
  { name: "Багет", value: "frame_molding" },
  { name: "Короб", value: "box" },
  { name: "Подрамник", value: "backframe" },
  { name: "Паспарту", value: "passepartout" },
];

const PRODUCT_VIEWS: Record<string, React.FC> = {
  frame_molding: FrameMoldingModal,
  box: BoxModal,
  backframe: BackframeModal,
  passepartout: PassepartoutModal,
};

type AddModalType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (values: any) => void;
};

const AddModal: React.FC<AddModalType> = ({ open, setOpen, onSubmit }) => {
  const [currentProduct, setCurrentProduct] = useState(products[0].value);
  const CurrentForm = PRODUCT_VIEWS[currentProduct];

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    setCurrentProduct(e.target.value as string);
  };

  const handleClose = () => {
    setOpen(false);
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
