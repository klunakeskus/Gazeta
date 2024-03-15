import React, { useState, useEffect } from "react";
import axios from "axios";
import PostsList from "../../components/PostsList";
import Pagination from "../../components/Pagination";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [page]);

  return (
    <div>
      <h1>Posts</h1>
      <PostsList posts={posts} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export { HomePage };
