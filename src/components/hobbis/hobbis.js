import React, { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Hobbis = ({ setHobbis }) => {

    const history = useHistory()

    const [user_hobbi, setUser] = useState({
        favoutite_game_name: "",
        first_game_name: "",
        second_game_name: "",
        favourite_book_name: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user_hobbi,
            [name]: value
        })

    }

    const Hobbis = () => {
        user_hobbi.user_id = JSON.parse(
            localStorage.getItem("user_values")
        )._id
        axios.post("http://localhost:9002/hobbis", user_hobbi)
            .then(res => {
                history.push("/resume")
            })
    }

    return (
        <div className="Hobbis" >
            {console.log("user_hobbi", user_hobbi)}
            <h1>Hobbies</h1>
            <input
                type="text"
                name="favoutite_game_name"
                value={user_hobbi.favourite_game_name}
                placeholder="Enter your Favourite Sports"
                onChange={handleChange} />
            <br></br>
            <input
                type="text"
                name="first_game_name"
                value={user_hobbi.first_game_name}
                placeholder="Enter your First Game Name"
                onChange={handleChange} />
            <br></br>
            <input
                type="text"
                name="second_game_name"
                value={user_hobbi.second_game_name}
                placeholder="Enter your Second Game Name"
                onChange={handleChange} />
            <br></br>
            <input
                type="text"
                name="favourite_book_name"
                value={user_hobbi.favourite_book_name}
                placeholder="Enter your Favourite Book Name"
                onChange={handleChange} />
            <br></br>
            <input
                type="button"
                value="Back"
                onClick={() => history.push("/work_exp")} />
            <input
                type="button"
                value="Add Data"
                onClick={Hobbis} />
            <input
                type="button"
                value="Submit"
                onClick={() => history.push("/resume")} />

        </div>

    )
}

export default Hobbis