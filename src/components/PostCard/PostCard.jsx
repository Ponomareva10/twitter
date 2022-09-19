import React from "react";
import style from './style.module.css';
import { Link } from 'react-router-dom'

const PostCard = ({title, body, userId}) => {
  
  return(
        <div className={style.card}>
          <h1 className={style.title}>Title</h1>
          <p className={style.text}>{title}</p>
          <h1 className={style.title}>Body</h1>
          <p className={style.text}>{body}</p>
          <Link to={`../users/${userId}`} className={style.btn}>Autor</Link>
          <Link to={'/'} className={style.btn}>Comments</Link>
        </div>
  )
}

export default PostCard;