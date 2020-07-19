import React from "react";
import { useStore } from "effector-react";

import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";

import {
  SortingState,
  IntegratedSorting,
  SearchState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging,
} from "@devexpress/dx-react-grid";

import { $comments } from "../../models";

const columns = [
  { name: "email", title: "Email" },
  {
    name: "country",
    title: "Страна",
    getCellValue: (cell) => cell.country.title,
  },
  { name: "comment", title: "Комментарий" },
];

export const CommentsTable = (props) => {
  const comments = useStore($comments);

  return (
    <Grid rows={comments} columns={columns}>
      <SearchState />
      <IntegratedFiltering />

      <SortingState />
      <IntegratedSorting />

      <PagingState pageSize={5} />
      <IntegratedPaging />

      <Table messages={{ noData: "Нет данных" }} />
      <TableHeaderRow
        messages={{ sortingHint: "Сортировать" }}
        showSortingControls
      />
      <Toolbar />
      <SearchPanel messages={{ searchPlaceholder: "Поиск" }} />
      <PagingPanel messages={{ info: `{from}-{to} из {count}` }} />
    </Grid>
  );
};
