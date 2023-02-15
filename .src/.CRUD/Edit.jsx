import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./home.module.css"
const Edit=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let{index}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/content/${index}`)
        .then((res)=>{
            console.log(res.data);
            setName(res.data.name)
            setSalary(res.data.salary)
            setCompany(res.data.company)
        })
    },[])

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
        axios.put(`http://localhost:3000/content/${index}`,inf)
        .then(()=>{
            console.log("data is updated");
        })
        navigate('/u')
    }
    let Back=()=>{
        navigate('/u')
    }
    return(
        <div id={style.ed}>
            <table>
                <tr><th colSpan='2'><h4>User-Details</h4></th></tr>
                <tr>
                    <td><label>Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label>Salary</label></td>
                    <td>:<input type="text" value={salary} onChange={salaryData}/></td>
                </tr>
                <tr>
                    <td><label>Company</label></td>
                    <td>:<input type="text" value={company} onChange={companyData}/></td>
                </tr>
                <tr>
                    <th><button onClick={formHandle}>Submit</button></th>
                    <th><button className={style.bac} onClick={Back}>Back</button></th>
                </tr>
            </table>

        </div>
    )
}
export default Edit
