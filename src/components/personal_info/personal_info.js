import React, { useState } from "react";
import "./personal_info.css";
import axios from "axios"
import { useHistory } from "react-router-dom"


const Personal_Info = ({ setPersonal_InfoUser }) => {

    const history = useHistory()

    const [user_info, setUser] = useState({
        tempname: "",
        tempmobile_number: "",
        tempage: "",
        tempemail: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user_info,
            [name]: value
        })

    }

    const personal_info = () => {
        user_info.user_id = JSON.parse(
            localStorage.getItem("user_values")
        )._id
        axios
            .post("http://localhost:9002/personal_info", user_info)
            .then((res) => {

                history.push("/your_education_info")
            })
    }

    console.log(JSON.parse(localStorage.getItem("user_values")))
    const idField = document.querySelector('[name = "user_id"]')
    // console.log(idField)

    return (
        <div className="Personal_Info" >
            {console.log("User_info", user_info)}
            <h1>Personal Info</h1>
            <input
                type="text"
                name="tempname"
                value={user_info.tempname}
                placeholder="Enter your Name"
                onChange={handleChange}
            />
            <br></br>
            <input
                type="number"
                name="tempmobile_number"
                value={user_info.tempmobile_number}
                placeholder="Enter your Mobile number"
                onChange={handleChange}
            />
            <br></br>
            <input
                type="number"
                name="tempage"
                value={user_info.tempage}
                placeholder="Enter your Age"
                onChange={handleChange}
            />
            <br></br>
            <input
                type="text"
                name="tempemail"
                value={user_info.tempemail}
                placeholder="Enter your Email"
                onChange={handleChange}
            /> <br></br><br></br>
            <input
                type="button"
                value="Back"
                onClick={() => history.push("/")}
            />
            <input
                type="button"
                value="Add Data"
                onClick={personal_info}
            />
            <input
                type="button"
                value="Next"
                onClick={(personal_info) => history.push("/your_education_info")} />

        </div>

    )
}

export default Personal_Info