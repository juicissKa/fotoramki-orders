import {
  Button,
  Dialog,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import FrameMoldingModal from "./FrameMoldingModal";
import BackframeModal from "./BackframeModal";
import BoxModal from "./BoxModal";
import PassepartoutModal from "./PassepartoutModal";
import { handleSelectChange } from "../../utils/handleSelectChange";
import { handleTextChange } from "../../utils/handleTextChange";

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
};

const AddModal: React.FC<AddModalType> = ({ open, setOpen }) => {
  const [product, setProduct] = useState(products[0].value);
  const CurrentView = PRODUCT_VIEWS[product];

  const [clientName, setClientName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{
            width: 560,
            gap: 2,
            overflow: "hidden",
          }}
        >
          <Stack
            sx={{
              maxHeight: 456,
              minHeight: 0,
              overflow: "scroll",
              gap: 2,
              padding: 2,
              display: "flex",
            }}
          >
            <FormControl>
              <InputLabel id="order-label">Вид заказа</InputLabel>
              <Select
                label={"Вид заказа"}
                labelId="order-label"
                onChange={(e) => handleSelectChange(e, setProduct)}
                value={product}
              >
                {products.map((product) => (
                  <MenuItem
                    key={`${product.value}${product.name}`}
                    value={product.value}
                  >
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <CurrentView />
          </Stack>

          <Stack
            direction="row"
            sx={{ justifyContent: "end", padding: 2, minHeight: "100%" }}
          >
            <Button onClick={() => setOpen(false)}>Отмена</Button>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Добавить товар
            </Button>
          </Stack>
        </FormControl>
      </form>
    </Dialog>
  );
};

export default AddModal;
