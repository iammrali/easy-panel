import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { PropTypes } from "prop-types";
import React from "react";

const EnhancedTableHead = ({
  columns,
  order = "asc",
  orderBy,
  onRequestSort,
}) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((col) => (
          <TableCell
            key={col.id}
            padding={col.disablePadding ? "none" : "default"}
            sortDirection={orderBy.id === col.id ? order : false}
          >
            <TableSortLabel
              active={orderBy.id === col.id}
              direction={orderBy.id === col.id ? order : "asc"}
              onClick={() => onRequestSort(col)}
            >
              {col.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  columns: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]),
  orderBy: PropTypes.object.isRequired,
};

export default EnhancedTableHead;
