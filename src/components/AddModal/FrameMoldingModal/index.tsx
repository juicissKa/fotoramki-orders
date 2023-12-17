import React, { createContext, useEffect, useRef, useState } from "react";
import { handleNumberChange } from "../../../utils/handleNumberChange";
import { handleTextChange } from "../../../utils/handleTextChange";
import AddPassepartout from "../PassepartoutSection/AddPassepartout";
import { handleSelectChange } from "../../../utils/handleSelectChange";
import axios from "axios";
import { Accessory } from "../../types";
import NumberInput from "../NumberInput";
import PassepartoutSection from "../PassepartoutSection";
import { Button, Grid, MenuItem } from "@mui/material";
import { Select, TextField } from "mui-rff";
import arrayMutators from "final-form-arrays";

import select_data from "../../../json/select_data.json";
import { Form } from "react-final-form";

export type PassepartoutString = {
  horizontalWidth: string;
  verticalWidth: string;
  price: string;
  code: string;
};

const FrameMoldingModal: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return isLoaded ? (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      initialValues={{ orderType: "Багет" }}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit, form: { mutators }, values }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            padding={2}
            sx={{
              "& .MuiGrid-item": {
                "& .MuiTextField-root": { width: "100%" },
              },
            }}
          >
            <Grid item xs={6}>
              <TextField name="workName" label="Название работы" required />
            </Grid>
            <Grid item xs={6}>
              <TextField name="width" label="Ширина" type="number" required />
            </Grid>
            <Grid item xs={6}>
              <TextField name="height" label="Длина" type="number" required />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="frameMoldingWidth"
                label="Ширина багета"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="frameMoldingPrice"
                label="Цена багета"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="frameMoldingCode"
                label="Артикул багета"
                required
              />
            </Grid>
            <PassepartoutSection mutators={mutators}></PassepartoutSection>
            <Grid item xs={6}>
              <Select
                name={"glass"}
                label={"Стекло"}
                sx={{ width: "100%" }}
                required
              >
                {select_data.glassList.map((glass, index) => (
                  <MenuItem key={`glass${index}`} value={glass}>
                    {glass}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Select
                name={"back"}
                label={"Задник"}
                sx={{ width: "100%" }}
                required
              >
                {select_data.backList.map((back, index) => (
                  <MenuItem key={`back${index}`} value={back}>
                    {back}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button type={"submit"}>Добавить заказ</Button>
            </Grid>
          </Grid>
        </form>
      )}
    ></Form>
  ) : (
    <>Загрузка</>
  );
};

export default FrameMoldingModal;
