import React, { useState } from "react";
import "./resume.css"
import axios from "axios"
import { useHistory } from "react-router-dom"




const resume = () => {
    axios.get("http://localhost:9002/resume", {
        params: {
            user_id: JSON.parse(
                localStorage.getItem("user_values")
            )._id
        }
    })
        .then(res => {
            console.log(res.data.args);

        })

}


const Resume = ({ setLoginUser }) => {
    const history = useHistory()

    return (
        <div className="resume">
            <h1>YOUR DETAILS ARE SUBMITED </h1>
            <div className="button" onClick={resume}>get my data</div>
            <div className="button" onClick={() => history.push("/login")}>Logout</div>

        </div>
    )
}

export default Resume