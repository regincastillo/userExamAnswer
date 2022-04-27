import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingWrapper } from "./Loading.style";

const Loading: FC = () => {
  return (
    <LoadingWrapper>
      <CircularProgress size="5rem"  disableShrink />
    </LoadingWrapper>
  );
};

export default Loading;
