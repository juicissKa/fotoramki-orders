import React from "react";
import PassepartoutSection from "../PassepartoutSection";
import { Button, Grid, MenuItem } from "@mui/material";
import { Select } from "mui-rff";
import arrayMutators from "final-form-arrays";

import selectData from "../../../../shared/json/select_data.json";
import { Form } from "react-final-form";
import PhoneInput from "../../../../shared/ui/PhoneInput/PhoneInput";
import NumberInput from "../../../../shared/ui/NumberInput/NumberInput";
import TextInput from "../../../../shared/ui/TextInput/TextInput";
import { useAppDispatch } from "../../../../app/store/redux/store";
import {
  closeModal,
  openSnack,
} from "../../../../app/store/redux/slices/formSlice/slice";
import { useCreateOrderMutation } from "../../../../app/store/redux/slices/orderApi";

const initialValues = {
  orderType: "Оформление в багет",
  orderProps: {
    glass: selectData.glassList[0],
    back: selectData.backList[0],
  },
};

const FrameMoldingModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const onSubmit = (values: any) => {
    createOrder(values)
      .then((res) => {
        dispatch(
          openSnack({ text: "Заказ успешно добавлен!", type: "success" })
        );
        dispatch(closeModal());
      })
      .catch((err) => {
        dispatch(
          openSnack({ text: "Ошибка! Заказ не был добавлен!", type: "error" })
        );
      });
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
              <TextInput
                name="workName"
                label="Название работы"
                placeholder='Картина "Домик в лесу"'
                required
              />
            </Grid>
            <Grid item xs={6}>
              <NumberInput
                name="orderProps.width"
                label="Ширина по горизонтали"
                suffix="мм"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <NumberInput
                name="orderProps.height"
                label="Ширина по вертикали"
                suffix="мм"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <NumberInput
                name="orderProps.base"
                label="Ширина багета"
                suffix="мм"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <NumberInput
                name="orderProps.price"
                label="Цена багета"
                suffix="₽"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextInput
                name="orderProps.code"
                label="Артикул багета"
                placeholder="17.4038.11.IQ"
                required
              />
            </Grid>
            <PassepartoutSection mutators={mutators}></PassepartoutSection>
            <Grid item xs={6}>
              <Select
                name={"orderProps.glass"}
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
                name={"orderProps.back"}
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
              <TextInput
                name="client"
                label="Имя клиента"
                placeholder="Иванов Иван Иванович"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <PhoneInput
                name="phone"
                label="Номер телефона клиента"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type={"submit"} disabled={isLoading}>
                Добавить заказ
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    ></Form>
  );
};

export default FrameMoldingModal;
