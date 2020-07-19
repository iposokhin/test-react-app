import { PagesRoot } from "./root";
import { MainPage } from "./main/page";
import { CommentsPage } from "./comments/page";
import { DocumentsPage } from "./documents/page";

export const routes = () => [
  {
    component: PagesRoot,
    routes: [
      {
        path: "/",
        exact: true,
        component: MainPage,
        header: "Главная"
      },
      {
        path: "/documents",
        exact: true,
        component: DocumentsPage,
        header: "Документы"
      },
      {
        path: "/comments",
        exact: true,
        component: CommentsPage,
        header: "Комментарии"
      }
    ]
  }
];
