import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";

export const MainLayoutPage = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      {loading? <Loader/> : null}
    </React.Fragment>
  );
};
