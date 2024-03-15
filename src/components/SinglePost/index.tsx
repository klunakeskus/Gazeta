import { Link, useParams } from "react-router-dom";
import styles from "../../App.module.css";
import { SinglePostProps } from "./interfaces";
import { useFetchPost } from "../../api/useFetchData";

const SinglePost: React.FC<SinglePostProps> = () => {
  const { id } = useParams<{ id: string }>();

  const { post, loading, error } = useFetchPost(Number(id));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <header className={styles.header}>
        <Link to='/'>
          <h1>Back to posts</h1>
        </Link>
      </header>
      <div>
        {post ? (
          <div className={styles.singlePost}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>No post found</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
