import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useLayoutStyles } from "../../../styles";
import NavBar from "./NavBar/index";
import TopBar from "./TopBar";

export default function MainLayout() {
  const classes = useLayoutStyles();
  const [isNavOpenInMobile, setNavOpenInMobile] = useState(false);

  const openNav = () => setNavOpenInMobile(true);
  const closeNav = () => setNavOpenInMobile(false);

  return (
    <div className={classes.root}>
      <TopBar onNavOpenInMobile={openNav} />
      <NavBar onCloseInMobile={closeNav} openMobile={isNavOpenInMobile} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </div>
  );
}
