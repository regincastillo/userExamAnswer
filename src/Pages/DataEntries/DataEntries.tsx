import React, { FC, useEffect, useState, useCallback } from "react";
import { SnackBarProp } from "./DataEntries.type";
import { Snackbar, Alert, Button, Typography } from "@mui/material";
import { Wrapper } from "@Components/Wrapper/Wrapper";
import {
  entriesData,
  entriesLoaded,
  editDataEntries,
  addDataEntries,
  deleteDataEntries,
  entriesDataPending,
} from "@Store/Entries/Entries.slice";
import { useAppSelector, useAppDispatch } from "@Store/StoreHooks";
import { getEntries } from "@Store/Entries/Entries.extraReducers";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { DataEntriesWrapper, ButtonCont } from "./DataEntries.style";
import { Entries } from "@Store/Entries/Entries.type";
import CreateViewModal from "@Components/CreateViewModal/CreateViewModal";

const DataEntries: FC = () => {
  const snackbarInit: SnackBarProp = {
    children: "",
    severity: undefined,
    show: false,
  };
  const data = useAppSelector(entriesData);
  const [snackbar, setSnackbar] = useState(snackbarInit);
  const alreadyLoaded = useAppSelector(entriesLoaded);
  const pending = useAppSelector(entriesDataPending);

  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [modatType, setModatType] = useState("Create");
  const [viewData, setViewData] = useState();

  const columns: GridColDef[] = [
    {
      field: "Category",
      headerName: "Category",
      editable: true,
      width: 150,
    },
    { field: "API", headerName: "API", editable: true, width: 200 },
    {
      field: "Description",
      headerName: "Description",
      editable: true,
      width: 565,
    },
    {
      field: "Auth",
      headerName: "Auth",
      editable: true,
      width: 100,
    },

    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      renderCell: (params: GridRenderCellParams) => {
        return (
          <Button
            onClick={() => {
              console.log("view", params?.row);
              setViewData(params?.row);
              setShowModal(true);
              setModatType("view");
            }}
          >
            View
          </Button>
        );
      },
    },
  ];

  const handleCloseSnackbar = () => setSnackbar(snackbarInit);

  const isNullish = (obj: Entries) =>
    Object.entries(obj)
      // eslint-disable-next-line array-callback-return
      .filter((item) => {
        if (item[0] !== "Auth" && item[1] === "") {
          return item;
        }
      })
      .map((item) => item[0]);

  const useFakeMutation = () => {
    return useCallback(
      (entries: Entries) =>
        new Promise((resolve, reject) =>
          setTimeout(() => {
            let fields = isNullish(entries);
            if (fields?.length > 0) {
              reject(
                new Error(
                  `Error while saving Entrie: ${fields.toString()} ${
                    fields?.length > 1 ? "are" : "is"
                  } required`
                )
              );
            } else {
              dispatch(editDataEntries(entries));
              resolve(entries);
            }
          }, 200)
        ),
      []
    );
  };

  const mutateRow = useFakeMutation();

  const handleProcessRowUpdateError = useCallback((error: any) => {
    setSnackbar({ children: error.message, severity: "error", show: true });
  }, []);

  const processRowUpdate = async (newRow: Entries): Promise<Entries> => {
    // Make the HTTP request to save in the backend
    const response: Entries = (await mutateRow(newRow)) as Entries;
    setSnackbar({
      children: "Entries successfully saved",
      severity: "success",
      show: true,
    });
    return response;
  };

  useEffect(() => {
    if (!alreadyLoaded) {
      dispatch(getEntries());
    }
  }, [dispatch, alreadyLoaded]);

  return (
    <Wrapper>
      <ButtonCont>
        <Button
          variant="contained"
          onClick={() => {
            setShowModal(true);
            setModatType("create");
          }}
          color="primary"
        >
          Create
        </Button>

        <Button
          disabled={selectionModel?.length === 0}
          variant="contained"
          onClick={() => {
            dispatch(deleteDataEntries(selectionModel));
          }}
          color="error"
        >
          Delete
        </Button>
      </ButtonCont>

      <Typography color="secondary">
        Note: Double click the cell you want to edit and press enter to save.
      </Typography>
      <DataEntriesWrapper>
        <DataGrid
          loading={pending}
          checkboxSelection
          rows={data}
          columns={columns}
          autoPageSize
          editMode="row"
          rowsPerPageOptions={[10]}
          experimentalFeatures={{ newEditingApi: true }}
          processRowUpdate={processRowUpdate}
          disableSelectionOnClick
          onProcessRowUpdateError={handleProcessRowUpdateError}
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
        {snackbar?.show && (
          <Snackbar
            open
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            onClose={handleCloseSnackbar}
            autoHideDuration={6000}
          >
            <Alert
              children={snackbar?.children}
              severity={snackbar?.severity}
              onClose={handleCloseSnackbar}
            />
          </Snackbar>
        )}
      </DataEntriesWrapper>

      <CreateViewModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        type={modatType}
        data={viewData}
        onProceed={(entrie: Entries) => {
          dispatch(addDataEntries(entrie));
        }}
      />
    </Wrapper>
  );
};

export default DataEntries;
