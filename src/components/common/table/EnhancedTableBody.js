import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import _ from "lodash";
import React from "react";
import EnhancedTableCell from "./EnhancedTableCell";

const EnhancedTableBody = ({
  rows,
  columns,
  order,
  orderBy,
  page,
  rowsPerPage,
  unknownCellText,
}) => {
  const emptyRowCount =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row) => {
          return (
            <TableRow hover tabIndex={-1} key={row.id}>
              {columns.map((col) => (
                <EnhancedTableCell
                  key={col.id + row.id}
                  row={row}
                  col={col}
                  unknownCellText={unknownCellText}
                />
              ))}
            </TableRow>
          );
        })}

      {emptyRowCount > 0 && (
        <TableRow style={{ height: 33 * emptyRowCount }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

function stableSort(array, comparator) {
  array.sort((a, b) => {
    const order = comparator(a, b);
    if (order !== 0) return order;
    return 1;
  });

  return array;
}

function descendingComparator(a, b, item) {
  const valA = _.get(a, item.orderBy || item.path || item.id) || a.id;
  const valB = _.get(b, item.orderBy || item.path || item.id) || b.id;

  if (valB < valA) return -1;
  if (valB > valA) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default EnhancedTableBody;
