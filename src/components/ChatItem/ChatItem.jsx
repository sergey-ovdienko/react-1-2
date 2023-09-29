import React from "react";
import { Avatar } from "./Avatar/Avatar";
import styles from "./ChatItem.module.css";

export const ChatItem = ({ user }) => {
  return (
    <div className={styles.chatItem}>
      <Avatar avatarUrl={user.avatarUrl} status={user.status} />
      <span className={styles.name}>{user.name}</span>
    </div>
  );
};
