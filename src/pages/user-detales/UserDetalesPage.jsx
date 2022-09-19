import React from "react";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import Layout from '../../components/Layout/Layout'
import { useParams } from "react-router-dom";

const UserDedalesPage = () => {
  const {id} = useParams()

  const [{name, username, email, company, phone, address, website}, setUserId] = useState([]);

  async function getUserId() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setUserId(data);
    console.log(data)
  }

  useEffect(() => {
    getUserId();
  }, [])
  
  return(
    <>
    <Layout>
    <div className={style.title}>User details: {id}</div>
    <div className={style.card}>
      <h1 className={style.card_title}>{name}</h1>
      <h1 className={style.card_title}>@{username}</h1>
      <div className={style.card_info}>Email: {email}</div>
      <div className={style.card_info}>Company: {company.name}</div>
      <div className={style.card_info}>Phone: {phone}</div>
      <div className={style.card_info}>City: {address.city}</div>
      <div className={style.card_info}>Website: <a>{website}</a></div>
      <button className={style.btn}>Read posts</button>
    </div>
    </Layout>
    </>
  )
}

export default UserDedalesPage;