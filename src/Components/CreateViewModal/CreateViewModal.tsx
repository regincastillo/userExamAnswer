import React, { FC, SyntheticEvent } from "react";
import { Typography, Box, Button } from "@mui/material";

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
  width: '90%',
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
  const close = () => {
    if (onClose) {
      onClose();
    }
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & EntrieForm;

    console.log("target", target?.Category?.value);

    if (onProceed) {
      onProceed({
        id: uuidv4(),
        API: target?.API?.value,
        Description: target?.Description?.value,
        Auth: target?.Auth?.value,
        Category: target?.Category?.value,
      });
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
          required={type === "Create"}
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
