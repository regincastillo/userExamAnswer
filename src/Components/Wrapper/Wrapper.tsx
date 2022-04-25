import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "95%",
  maxWidth: 1200,
  margin: "auto",
  borderRadius: 4,
  marginTop: "1rem",
  boxSizing: "border-box",
  marginBottom: "2rem",

  [theme.breakpoints.up('md')]: {
    width: "100%",
  },
}));
