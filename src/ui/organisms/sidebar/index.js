import React from "react";
import { Drawer, IconButton, Divider } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

const Sidebar = props => {
  const { isOpen, handleClose, classes, children } = props;
  const { drawer, drawerPaper, drawerHeader } = classes;

  return (
    <Drawer
      className={drawer}
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: drawerPaper
      }}
    >
      <div className={drawerHeader}>
        <IconButton onClick={handleClose}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      {children}
    </Drawer>
  );
};

export { Sidebar };
