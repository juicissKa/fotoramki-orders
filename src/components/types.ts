export type Accessory = {
  id: number;
  name: string;
  price: number;
  type: string;
};

export enum ChipColor {
  Primary = "primary",
  Error = "error",
  Success = "success",
  Warning = "warning",
  Secondary = "secondary",
}
