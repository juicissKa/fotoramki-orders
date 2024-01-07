import { Chip, ChipTypeMap, SxProps } from "@mui/material";
import React from "react";
import { ChipColor } from "../../../../types";
import {
  AccessTimeFilled,
  AssignmentReturned,
  DoneAll,
  Engineering,
  Error,
} from "@mui/icons-material";

type StatusType = {
  status: string;
};

const STATUS_COLORS = new Map<
  string,
  {
    color: ChipColor;
    icon: any;
  }
>();
STATUS_COLORS.set("Принят", {
  color: ChipColor.Secondary,
  icon: <AssignmentReturned htmlColor="white" />,
});
STATUS_COLORS.set("На производстве", {
  color: ChipColor.Primary,
  icon: <Engineering htmlColor="white" />,
});

STATUS_COLORS.set("Ожидает выдачи", {
  color: ChipColor.Warning,
  icon: <AccessTimeFilled htmlColor="white" />,
});

STATUS_COLORS.set("Выдан", {
  color: ChipColor.Success,
  icon: <DoneAll htmlColor="white" />,
});
STATUS_COLORS.set("Отменён", {
  color: ChipColor.Error,
  icon: <Error htmlColor="white" />,
});

const Status: React.FC<StatusType> = ({ status }) => {
  return (
    <Chip
      icon={STATUS_COLORS.get(status)?.icon}
      color={STATUS_COLORS.get(status)?.color}
      label={status}
      sx={{ width: 175, borderRadius: 3, justifyContent: "left" }}
    />
  );
};

export default Status;
