import { useState } from "preact/hooks";
import { askServer } from "../utils/connector";

export default function Form() {
    const [user,setUser] = useState({})
    
    const addNewUser = async () => {
        const res = await askServer("/api/new","POST",user)
    }

    return (
        <>
        <input type="text" name="name" id="name" />
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button onClick={addNewUser}>Add new user</button>
        </>
    )


}