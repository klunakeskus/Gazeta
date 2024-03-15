import { Link } from "react-router-dom";
import Post from "../Post/index";
import styles from "../../App.module.css";
import { PostListProps } from "./interfaces.js";

const PostsList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <Post post={post} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
