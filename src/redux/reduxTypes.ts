import { PassepartoutString } from "../components/AddModal/FrameMoldingModal";

export type Passepartout = {
  horizontalWidth: number;
  verticalWidth: number;
  price: number;
  code: string;
};

export type Additionals = {
  passepartouts: [];
  glass?: string;
  back?: string;
  code?: string;
};

export type Order = {
  type: string;
  name?: string;
  width?: number;
  height?: number;
  base?: number;
  price?: number;
  code?: string;
  glassId?: number;
  backId?: number;
  passepartouts?: Passepartout[];

  client_name: string;
  phone_number: string;
};
