import React, { FC, useState } from "react";
import { AppBar, Toolbar, Tabs, Tab, Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { NavLink, useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const [currentTab, setCurrentTab] = useState(location.pathname);

  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Tabs
          value={currentTab}
          onChange={(_e, value) => {
            setCurrentTab(value);
          }}
          sx={{ flexGrow: 1 }}
          variant={mobile ? "fullWidth" : "standard"}
        >
          <Tab
            label="Data Entries"
            value="/data-entries"
            to="/data-entries"
            component={NavLink}
          />
          <Tab label="Chart" value="/" to="/" component={NavLink} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
