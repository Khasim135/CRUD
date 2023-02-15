import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";
const User=()=>{
    let[dat,setDat]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/content")
        .then((res)=>{
            console.log(res.data);
            setDat(res.data)
        })
    },[])
    let Delete=(id)=>{
        axios.delete(`http://localhost:3000/content/${id}`)
        .then(()=>{
            console.log("data is deleted");
        })
        window.location.assign('/u')
    }
    return(
        <div id={style.user}>
            {dat.map((x)=>{
                return(
                    <div id={style.cards}>
                        <table>
                            <tr><th><h4>Employee :{x.id}</h4></th></tr>
                            <tr>
                                <td><label>Name</label></td>
                                <td>:{x.name}</td>
                            </tr>
                            <tr>
                                <td><label>Salary</label></td>
                                <td>:{x.salary}</td>
                            </tr>
                            <tr>
                                <td><label>Company</label></td>
                                <td>:{x.company}</td>
                            </tr>
                            <tr>
                                <td><Link to={`/ed/${x.id}`}><button>EDIT</button></Link></td>
                                <td><button className={style.del} onClick={()=>{Delete(x.id)}}>DELETE</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default User
