import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css"
const Create=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        setCompany(e.target.value)
    }
    let navigate=useNavigate()
    let formHandle=(e)=>{
        e.preventDefault()
        let inf={name,salary,company}
        axios.post("http://localhost:3000/content",inf)
        .then(()=>{
            console.log("data is inserted");
        })
        navigate('/u')
    }
    return(
        <div id={style.cr}>
            <table>
                <tr><th colSpan="2"><h4>User-Details</h4></th></tr>
                <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label>Salary</label></td>
                    <td><input type="text" value={salary} onChange={salaryData}/></td>
                </tr>
                <tr>
                    <td><label>Company</label></td>
                    <td><input type="text" value={company} onChange={companyData}/></td>
                </tr>
                <tr><th colSpan="2"><button onClick={formHandle}>Submit</button></th></tr>
            </table>
        </div>
    )
}
export default Create
