import React from "react";
import { Chat } from "./Chat/Chat";

export const App = ({ data }) => {
  return <Chat users={data} />;
};

