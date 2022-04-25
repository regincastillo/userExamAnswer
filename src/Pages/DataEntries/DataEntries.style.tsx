import { styled } from "@mui/material/styles";

export const DataEntriesWrapper = styled("div")(() => ({
  height: 631,
  marginTop: '1rem'
}));


export const ButtonCont = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'end',
  "> button" : {
    marginLeft: 10
  }
}));