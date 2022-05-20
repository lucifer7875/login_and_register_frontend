import React, { useState } from "react";
import "./personal_info.css";
import axios from "axios"
import { useHistory } from "react-router-dom"


const Personal_Info = ({ setPersonal_InfoUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        mobile_number: "",
        age: "",
        email: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }

    const personal_info = () => {
        axios.post("http://localhost:9002/personal_info", user)
            .then((res) => {
                console.log(res.user)

                setPersonal_InfoUser(res.data.user)
                history.push("/")
            })
    }

    console.log(JSON.parse(localStorage.getItem("user_values")))
    // console.log(JSON.parse(localStorage.getItem("user_values")))
    // const idField = document.querySelector('[name = "user_id"]')
    // console.log(idField)

    return (
        <div className="Personal_Info" >
            {console.log("User", user)}
            <h1>Personal Info</h1>
            <input
                type="text"
                name="name"
                value={user.name}
                placeholder="Enter your Name"
                onChange={handleChange}
            />
            <br></br>
            <input
                type="number"
                name="mobile_number"
                value={user.TempMobile_Number}
                placeholder="Enter your Mobile number"
                onChange={handleChange}
            />
            <br></br>
            <input
                type="number"
                name="age"
                value={user.TempAge}
                placeholder="Enter your Age"
                onChange={handleChange}
            />
            <br></br>
            <input
                type="text"
                name="email"
                value={user.TempEmail}
                placeholder="Enter your Email"
                onChange={handleChange}
            /> <br></br>
            {/* <input
                type="text"
                name="user_id"
                hidden
            /><br></br> */}
            <input
                type="button"
                onClick={() => history.push("/")}
            />Back
            <input
                type="button"
                onClick={() => history.push("/your_education_info")}
            />Next

        </div>

    )
}

export default Personal_Info