import React, { FC, useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();
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
