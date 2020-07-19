import React from "react";

import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import {
  Description as DescriptionIcon,
  Image as ImageIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

const mapTypeToIcon = {
  jpeg: ImageIcon,
  pdf: DescriptionIcon,
};

export const DocsListItem = (props) => {
  const { type, title = "Без названия", size = 0, remove } = props;

  const Icon = mapTypeToIcon[type] || DescriptionIcon;
  const sizeText = (size / 1000).toFixed(1) + "КБ";

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={sizeText} />
      <ListItemSecondaryAction>
        <IconButton onClick={remove}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
