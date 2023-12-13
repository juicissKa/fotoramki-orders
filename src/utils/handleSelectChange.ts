import { SelectChangeEvent } from "@mui/material";

export const handleSelectChange = (
  e: SelectChangeEvent,
  setFunc: React.Dispatch<React.SetStateAction<string>>
) => {
  setFunc(e.target.value);
};
