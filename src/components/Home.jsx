import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../features/userSlice'
import axios from 'axios'

const Home = () =>{
    const user = useSelector(selectUser)

return(
    <div className="container-sm">
        < br/>< br/>< br/>
        <h1>
            {user?.firstName}
        </h1>
    </div>
)
}
export default Home