import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Work_Exp = ({ setWork_ExpUser }) => {

    const history = useHistory()

    const [user_exp, setUser] = useState({
        comapny_name: "",
        experience_of_company: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user_exp,
            [name]: value
        })

    }

    const Work_Exp = () => {
        user_exp.user_id = JSON.parse(
            localStorage.getItem("user_values")
        )._id
        axios.post("http://localhost:9002/work_exp", user_exp)
            .then(res => {
                history.push("/hobbis")
            })
    }

    return (
        <div className="Work_Exp" >
            {console.log("user_exp", user_exp)}
            <h1>Work Experience</h1>
            <input
                type="text"
                name="comapny_name"
                value={user_exp.company_name}
                placeholder="Enter your company Name"
                onChange={handleChange} /><br></br>
            <input
                type="number"
                name="experience_of_company"
                value={user_exp.experience_of_company}
                placeholder="Experience Of Company In Year"
                onChange={handleChange} /><br></br>

            <input
                type="button"
                value="Back"
                onClick={() => history.push("/your_education_info")} />
            <input
                type="button"
                value="Add Data"
                onClick={Work_Exp} />
            <input
                type="button"
                value="Next"
                onClick={() => history.push("/hobbis")} />

        </div>



    )
}

export default Work_Exp