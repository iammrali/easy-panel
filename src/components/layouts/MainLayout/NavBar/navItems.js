import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import TableChartIcon from "@material-ui/icons/TableChart";
import messageResource from "../../../../constants";

export const items = [
  {
    href: "/dashboard",
    icon: SignalCellularAltIcon,
    title: messageResource.dashboard,
  },
  {
    href: "/table",
    icon: TableChartIcon,
    title: messageResource.table,
  },
  {
    href: "/app/login",
    icon: ExitToAppIcon,
    title: messageResource.login,
  },
];
