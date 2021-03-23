import React from "react";
import Calendar from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function ActivityFilter() {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 25 }}>
        <Header icon="filter" attached color="teal" contents="Filters" />
        <Menu.Item content="All activities" />
        <Menu.Item content="Im going " />
        <Menu.Item content="Im Hosting" />
      </Menu>
      <Header />
      <Calendar />
    </>
  );
}
