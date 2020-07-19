import React from "react";
import { createBrowserHistory } from "history";
import { Home, Description, Comment } from "@material-ui/icons";

export const history = createBrowserHistory();

export const links = [
  {
    text: "Главная",
    icon: <Home />,
    url: "/"
  },
  {
    text: "Документы",
    icon: <Description />,
    url: "/documents"
  },
  {
    text: "Комментарии",
    icon: <Comment />,
    url: "/comments"
  }
];
