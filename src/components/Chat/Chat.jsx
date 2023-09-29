import React from "react";
import { ChatItem } from "../ChatItem/ChatItem";
import styles from "./Chat.module.css";

export const Chat = ({ users }) => {
  return (
    <div className={styles.container}>
      <h1>Happy chat</h1>
      <div>
        {users.map((user) => (
          <ChatItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
