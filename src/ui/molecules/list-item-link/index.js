import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";

const ListItemLink = props => {
  const { icon, text, url, selected } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={url} {...linkProps} />
      )),
    [url]
  );

  return (
    <li>
      <ListItem button selected={selected} component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
};

export { ListItemLink };
