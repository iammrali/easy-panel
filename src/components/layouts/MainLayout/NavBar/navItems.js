import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import messageResource from "../../../../constants";
import { getCurrentUser } from "../../../../services/auth/authenticateService";

export const items = [
  {
    href: "/dashboard",
    icon: SignalCellularAltIcon,
    title: messageResource.dashboard,
  },
  {
    href: "/app/login",
    icon: ExitToAppIcon,
    title: getCurrentUser() ? messageResource.logout : messageResource.login,
  },
];
