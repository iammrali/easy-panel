import TableCell from "@material-ui/core/TableCell";
import clsx from "clsx";
import _ from "lodash";
import React from "react";
import { useTableCellStyles } from "./EnhancedTableStyles";

const EnhancedTableCell = ({ row, col, unknownCellText }) => {
  const classes = useTableCellStyles();

  const val = _.get(row, col.path) || col.defaultValue;
  const tag = _.get(row, col.tag);
  const hasTag = col.tag && tag;

  const cell = col.render ? (
    col.render(val)
  ) : (
    <>
      <span>{val ? val : unknownCellText}</span>
      {hasTag && <span className={classes.extraTag}>{tag}</span>}
    </>
  );

  return (
    <TableCell className={clsx(hasTag && classes.cellWithTag)}>
      {cell}
    </TableCell>
  );
};

export default EnhancedTableCell;
