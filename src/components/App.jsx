import React from "react";
import { UserList } from "./UserList";

export const App = ({ data }) => {
  return (
    <div>
      <UserList users={data} />
    </div>
  );
};
