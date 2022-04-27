import React, { FC, SyntheticEvent, useState } from "react";
import { Typography, Box, Button, Alert } from "@mui/material";
import { isNullish } from "@Utils/Helpers/validation.helpers";

import Modal from "@mui/material/Modal";
import { v4 as uuidv4 } from "uuid";
import { CustomInput, BtnCont } from "./CreateViewModal.style";
import { EntrieForm, CreateViewModalProps } from "./CreateViewModal.type";

export const defaultProps: CreateViewModalProps = {
  open: false,
  type: "create",
};

const boxSx = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  color: "white",
  boxSizing: "border-box",
};

const CreateViewModal: FC<CreateViewModalProps> = ({
  open = false,
  onClose,
  onProceed,
  type,
  data,
}) => {
  const [erroMess, setErrorMess] = useState([]);
  const close = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & EntrieForm;
    const formatted = {
      id: uuidv4(),
      API: target?.API?.value,
      Description: target?.Description?.value,
      Auth: target?.Auth?.value,
      Category: target?.Category?.value,
    };
    const isNull = isNullish(formatted) as []
    if (isNull?.length > 0) {
      setErrorMess(isNull);
      return;
    }

    if (onProceed) {
      onProceed(formatted);
      close();
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        close();
      }}
    >
      <Box onSubmit={handleSubmit} sx={boxSx} component="form">
        <Typography variant="h6">{type} Entries</Typography>
        {erroMess?.length > 0 && (
          <Alert severity="error">
            This {erroMess?.length > 1 ? "are" : "is"} required: {erroMess?.toString()}
          </Alert>
        )}

        <CustomInput
          fullWidth
          required={type === "create"}
          disabled={type === "view"}
          name="Category"
          id="outlined-required"
          label="Category"
          defaultValue={type === "view" ? data?.Category : null}
        />
        <CustomInput
          defaultValue={type === "view" ? data?.API : null}
          disabled={type === "view"}
          fullWidth
          name="API"
          required={type === "create"}
          id="outlined-required"
          label="Api"
        />
        <CustomInput
          defaultValue={type === "View" ? data?.Description : null}
          fullWidth
          required={type === "create"}
          disabled={type === "view"}
          name="Description"
          id="outlined-required"
          label="Description"
        />
        <CustomInput
          defaultValue={type === "view" ? data?.Auth : null}
          name="Auth"
          fullWidth
          disabled={type === "view"}
          id="outlined-required"
          label="Auth"
        />
        <BtnCont>
          <Button
            onClick={() => {
              close();
            }}
            type="reset"
            variant="contained"
            color="error"
          >
            {type === "create" ? "Cancel" : "Close"}
          </Button>
          {type === "create" && (
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          )}
        </BtnCont>
      </Box>
    </Modal>
  );
};

CreateViewModal.defaultProps = defaultProps;
export default CreateViewModal;
