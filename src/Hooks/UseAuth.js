import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider/AuthProvider"


const UseAuth = () => {
    return useContext(AuthContext)
}

export default UseAuth;