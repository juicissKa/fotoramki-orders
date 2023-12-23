export type Accessory = {
  id: number;
  name: string;
  price: number;
  type: string;
};

export enum Status {
  Loading = "loading",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

export enum ChipColor {
  Primary = "primary",
  Error = "error",
  Success = "success",
  Warning = "warning",
}
