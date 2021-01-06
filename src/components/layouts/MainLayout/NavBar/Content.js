import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import React from "react";
import UserProfile from "../../../common/UserProfile";
import NavItem from "./NavItem";

export const Content = ({ items, user }) => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <UserProfile user={user} />

      <Box p={2}>
        <List>
          {items.map((item, index) => (
            <NavItem
              key={item.title}
              href={item.href}
              title={item.title}
              icon={item.icon}
              timeout={300 * index}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};
