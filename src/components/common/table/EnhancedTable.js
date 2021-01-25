import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import clsx from "clsx";
import { PropTypes } from "prop-types";
import React from "react";
import EnhancedTableBody from "./EnhancedTableBody";
import EnhancedTableHead from "./EnhancedTableHead";
import useStyles from "./EnhancedTableStyles";
import EnhancedTableToolbar from "./EnhancedTableToolbar";

const EnhancedTable = ({
  rows,
  columns,
  action,
  labels,
  pageSize = 10,
  backDrop,
  className,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(columns[0]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pageSize);

  const handleSort = (col) => {
    const isAsc = orderBy.id === col.id && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(col);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={clsx(classes.paper, className)}>
      {backDrop && (
        <Backdrop open={backDrop} className={classes.backDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <EnhancedTableToolbar title={labels.title}>{action}</EnhancedTableToolbar>

      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="enhanced table"
          size="small"
          aria-label="enhanced table"
        >
          <EnhancedTableHead
            columns={columns}
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleSort}
          />

          <EnhancedTableBody
            rows={rows}
            columns={columns}
            order={order}
            orderBy={orderBy}
            page={page}
            rowsPerPage={rowsPerPage}
            unknownCellText={labels.unknown}
          />
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 15, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

EnhancedTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      defaultValue: PropTypes.string,
      tag: PropTypes.string,
      orderBy: PropTypes.string,
      render: PropTypes.func,
    })
  ).isRequired,
  action: PropTypes.element,
  labels: PropTypes.shape({
    title: PropTypes.string,
    unknown: PropTypes.string,
  }),
  pageSize: PropTypes.number,
  backDrop: PropTypes.bool,
  className: PropTypes.any,
};

export default EnhancedTable;
