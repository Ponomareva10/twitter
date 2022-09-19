import React from "react";
import Layout from '../../components/Layout/Layout'
import { useState, useEffect } from 'react';
import UersCard from "../../components/UsersCard/UsersCard";
import style from './style.module.css'

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])
  console.log(users)

  return (
    <Layout>
      <div className="container">
      <h1 className={style.title}>Users</h1>
      <div className={style.wrapper}>
        {
          users.map(({name, email, id}) => (
            <UersCard name={name} email={email} key={id} id={id}/>
          ))
        }
      </div>
      </div>
    </Layout> 
  )
}

export default Users;