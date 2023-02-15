import React from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div id={style.nav}>
            <Link to='/c'>Create-User</Link>
            <Link to='/u'>User</Link>
        </div>
    )
}
export default Home
