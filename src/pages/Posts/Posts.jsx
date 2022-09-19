import React from "react";
import { useEffect, useState } from "react";
import Layout from '../../components/Layout/Layout'
import PostCard from "../../components/PostCard/PostCard";
import style from "./style.module.css"

const Posts = () => {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <Layout>
      <div className="container">
        <h1 className={style.title}>Posts page</h1>
        <div className={style.wrapper}>
          {posts.map((post) => {
              return <PostCard {...post} key={post.id} />
            }
          )}
        </div> 
      </div>
    </Layout>
  )
}

export default Posts;