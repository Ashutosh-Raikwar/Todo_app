import React from "react";
import Tasks from "./Tasks";
import Sidebar from "./Sidebar";

export const Content = () => {
  return (
    <section>
      <Tasks />
      <Sidebar />
    </section>
  );
};

export default Content;
