import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { handleNumberChange } from "../../../utils/handleNumberChange";
import { handleTextChange } from "../../../utils/handleTextChange";
import AddPassepartout from "../PassepartoutSection/AddPassepartout";
import { handleSelectChange } from "../../../utils/handleSelectChange";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { Accessory } from "../../types";
import {
  addPassepartout,
  orderSelector,
  setBase,
  setCode,
  setHeight,
  setName,
  setPrice,
  setWidth,
} from "../../../redux/slices/orderSlice";
import NumberInput from "../NumberInput";
import PassepartoutSection from "../PassepartoutSection";

export type PassepartoutString = {
  horizontalWidth: string;
  verticalWidth: string;
  price: string;
  code: string;
};

const workName = "Оформление в багет";

const FrameMoldingModal: React.FC = () => {
  const [glass, setGlass] = useState("");
  const [back, setBack] = useState("");

  const nameRef = useRef();
  const widthRef = useRef();
  const heightRef = useRef();
  const baseRef = useRef();
  const priceRef = useRef();
  const codeRef = useRef();

  const [glassList, setGlassList] = useState<Accessory[]>([]);
  const [backList, setBackList] = useState<Accessory[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3001/accessories/?type=задник")
        .then((response) => {
          setBackList(response.data);
        });
      await axios
        .get("http://localhost:3001/accessories/?type=стекло")
        .then((response) => {
          setGlassList(response.data);
        });

      setIsLoaded(true);
    };

    fetchData();
  }, []);

  return isLoaded ? (
    <Grid
      container
      spacing={2}
      sx={{
        "& .MuiGrid-item": { "& .MuiTextField-root": { width: "100%" } },
      }}
    >
      <Grid item xs={6}>
        <TextField label="Название работы" inputRef={nameRef} required />
      </Grid>

      <Grid item xs={6}>
        <NumberInput label="Ширина" adornment="мм" inputRef={widthRef} />
      </Grid>
      <Grid item xs={6}>
        <NumberInput label="Длина" adornment="мм" inputRef={heightRef} />
      </Grid>
      <Grid item xs={6}>
        <NumberInput label="Ширина багета" adornment="мм" inputRef={baseRef} />
      </Grid>
      <Grid item xs={6}>
        <NumberInput label="Цена багета" adornment="руб" inputRef={priceRef} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Артикул багета" inputRef={codeRef} required />
      </Grid>
      <PassepartoutSection></PassepartoutSection>

      <Grid item xs={6}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="glass-label">Стекло</InputLabel>
          <Select
            label={"Стекло"}
            labelId={"glass-label"}
            value={glass}
            onChange={(e) => handleSelectChange(e, setGlass)}
            sx={{ width: "100%" }}
          >
            {glassList.map((glass) => (
              <MenuItem value={glass.id}>{glass.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="back-label">Задник</InputLabel>
          <Select
            label={"Задник"}
            labelId={"back-label"}
            value={back}
            onChange={(e) => handleSelectChange(e, setBack)}
            sx={{ width: "100%" }}
          >
            {backList.map((back) => (
              <MenuItem value={back.id}>{back.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  ) : (
    <>Загрузка</>
  );
};

export default FrameMoldingModal;
