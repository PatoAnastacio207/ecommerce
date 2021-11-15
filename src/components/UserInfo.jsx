import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from '../features/userSlice'

const UserInfo =()=>{
    const user = useSelector(selectUser)

    return(
        <div>

        </div>
    )
}

export default UserInfo