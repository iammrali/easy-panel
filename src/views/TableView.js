import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { useEffect, useState } from "react";
import Page from "../components/common/Page";
import EnhancedTable from "../components/common/table/EnhancedTable";
import http from "../services/httpService";

const TableView = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    {
      id: "name",
      label: "نام",
      path: "name",
    },
    {
      id: "username",
      label: "نام کاربری",
      path: "username",
    },
    {
      id: "phone",
      label: "تلفن",
      path: "phone",
    },
    {
      id: "email",
      label: "ایمیل",
      path: "email",
    },
    {
      id: "companyName",
      label: "نام کمپانی",
      path: "company.name",
    },
  ];

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    getUsers();

    async function getUsers() {
      var { data } = await http.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!ignore) {
        setUsers(data);
        setIsLoading(false);
      }
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <Page>
      <EnhancedTable
        rows={users}
        columns={columns}
        labels={{ title: "لیست کاربران" }}
        backDrop={isLoading}
        action={
          <Tooltip title={"عملیات"}>
            <IconButton aria-label="create">
              <AddCircleOutlineOutlinedIcon />
            </IconButton>
          </Tooltip>
        }
      />
    </Page>
  );
};

export default TableView;
