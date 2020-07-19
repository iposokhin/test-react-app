import React from "react";
import { List } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { Sidebar, ListItemLink } from "../../ui";
import { links } from "../../lib";

const Navbar = props => {
  const { pathname } = useLocation();
  return (
    <Sidebar {...props}>
      <List>
        {links.map(link => (
          <ListItemLink
            key={link.url}
            selected={pathname === link.url}
            {...link}
          />
        ))}
      </List>
    </Sidebar>
  );
};

export { Navbar };
