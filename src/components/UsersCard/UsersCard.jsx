import React from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";

const UersCard = ({name, email, id}) => {
  const navigate = useNavigate();
  console.log(id)

  return (
      <div className={style.card}>
        <p>name: {name} </p>
        <p>email: {email} </p>
        <Link to={`${id}`}>
      <button className={style.btn}
        type="button">View more
      </button>
      </Link>
    </div>
  )
}

export default UersCard;