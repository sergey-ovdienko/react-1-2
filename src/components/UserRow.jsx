import React from "react";

export const UserRow = ({ user }) => {
  return (
    <li>
      {user.name} {user.status}
    </li>
  );
};
