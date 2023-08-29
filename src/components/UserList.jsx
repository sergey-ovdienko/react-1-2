import React from "react";
import { UserRow } from "./UserRow";

export const UserList = ({ users }) => {
  return (
    <div>
      <h1>Users in chat</h1>
      <ul>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};
