import { styled } from "@mui/material/styles";
import {TextField} from "@mui/material"
import { ButtonCont } from "@Pages/DataEntries/DataEntries.style";

export const CustomInput = styled(TextField)(() => ({
  marginTop: '1rem'
}));


export const BtnCont = styled(ButtonCont)(()=>({
    marginTop: '1rem'
}))