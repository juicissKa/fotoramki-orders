export enum ChipColor {
  Primary = "primary",
  Error = "error",
  Success = "success",
  Warning = "warning",
  Secondary = "secondary",
}

export type OrderType = {
  status: string;
  orderType: string;
  workName: string;
  client: string;
  phone: string;
  fullPrice: number;
  _id: string;
  orderProps: OrderPropsType;
  createdAt: string;
};

export type Passepartout = {
  width: number;
  height: number;
  price: number;
  code: string;
};

export type OrderPropsType = {
  width: number;
  height: number;
  base?: number;
  price?: number;
  code?: string;
  passepartouts?: Passepartout[];
  glass?: string;
  back?: string;
};
