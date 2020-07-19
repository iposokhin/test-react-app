import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${theme.sidebar.width}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: theme.sidebar.width
    },
    drawer: {
      width: theme.sidebar.width,
      flexShrink: 0
    },
    drawerPaper: {
      width: theme.sidebar.width
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -theme.sidebar.width
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    hide: {
      display: "none"
    }
  };
});

const Header = props => {
  const { isDrawerOpen, header, handleOpen } = props;
  const classes = useStyles();

  return (
    <Toolbar>
      <IconButton
        edge="start"
        onClick={handleOpen}
        color="inherit"
        className={clsx(isDrawerOpen && classes.hide)}
      >
        <Menu />
      </IconButton>
      <Typography noWrap variant="h6">
        {header}
      </Typography>
    </Toolbar>
  );
};

const MainTemplate = props => {
  const { header, children, sidebar } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Header isDrawerOpen={open} handleOpen={handleOpen} header={header} />
      </AppBar>
      {React.cloneElement(sidebar, {
        ...sidebar.props,
        classes,
        handleClose,
        isOpen: open
      })}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};

export { MainTemplate };
