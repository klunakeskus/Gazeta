import React from "react";
import styles from "../../App.module.css";
import { PostProps } from "./interfaces";

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
