import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Your_Education_Info = ({ setYour_Education_InfoUser }) => {
    const history = useHistory()

    const [user_edu, setUser] = useState({
        school_name: "",
        school_percentage: "",
        college_name: "",
        college_percentage: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user_edu,
            [name]: value,
        })
    }

    const Your_Education_Info = () => {
        user_edu.user_id = JSON.parse(
            localStorage.getItem("user_values")
        )._id
        axios
            .post("http://localhost:9002/your_education_info", user_edu)
            .then((res) => {
                history.push("/work_exp")
            })
    }
    // console.log(JSON.parse(localStorage.getItem("user_values")))
    // const idField = document.querySelector('[name = "user_edu"]')
    // console.log(idField)
    return (
        <div className="Your_Education_Info" >
            {console.log("user_edu", user_edu)}
            <h1>Your Education Info</h1>
            <input
                type="text"
                name="school_name"
                value={user_edu.school_name}
                placeholder="Enter your School Name"
                onChange={handleChange} />
            <br></br>
            <input
                type="number
            " name="school_percentage"
                value={user_edu.school_percentage}
                placeholder="Enter your School Percentage"
                onChange={handleChange} />
            <br></br>
            <input
                type="text"
                name="college_name"
                value={user_edu.college_name}
                placeholder="Enter your College Name"
                onChange={handleChange} />
            <br></br>
            <input
                type="number
            " name="college_percentage"
                value={user_edu.college_percentage}
                placeholder="Enter your College Percentage"
                onChange={handleChange} />
            <br></br>

            <input
                type="button"
                value="Back"
                onClick={() => history.push("/personal_info")} />
            <input
                type="button"
                value="Add Data"
                onClick={Your_Education_Info} />
            <input
                type="button"
                value="Next"
                onClick={() => history.push("/work_exp")} />


        </div>



    )
}

export default Your_Education_Info