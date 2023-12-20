import React from "react";
import PassepartoutSection from "../PassepartoutSection";
import { Button, Grid, MenuItem } from "@mui/material";
import { Select, TextField } from "mui-rff";
import arrayMutators from "final-form-arrays";

import selectData from "../../../json/select_data.json";
import { Form } from "react-final-form";
import axios from "axios";

const initialValues = {
  orderType: "Багет",
  glass: selectData.glassList[0],
  back: selectData.backList[0],
};

const FrameMoldingModal: React.FC = () => {
  const onSubmit = async (values: any) => {
    const result = await axios.post("http://localhost:3001/orders", values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      initialValues={initialValues}
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
                name="base"
                label="Ширина багета"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="price"
                label="Цена багета"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField name="code" label="Артикул багета" required />
            </Grid>
            <PassepartoutSection mutators={mutators}></PassepartoutSection>
            <Grid item xs={6}>
              <Select
                name={"glass"}
                label={"Стекло"}
                sx={{ width: "100%" }}
                required
              >
                {selectData.glassList.map((glass, index) => (
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
                {selectData.backList.map((back, index) => (
                  <MenuItem key={`back${index}`} value={back}>
                    {back}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField name="client" label="ФИО клиента" required />
            </Grid>
            <Grid item xs={6}>
              <TextField name="phone" label="Номер клиента" required />
            </Grid>
            <Grid item xs={12}>
              <Button type={"submit"}>Добавить заказ</Button>
            </Grid>
          </Grid>
        </form>
      )}
    ></Form>
  );
};

export default FrameMoldingModal;
