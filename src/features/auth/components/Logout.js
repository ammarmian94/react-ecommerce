import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { useEffect } from "react";

export default function Logout(){
    const user = useSelector(selectLoggedInUser)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(signOutAsync())
    })
return(
    <>

    {!user && <Navigate to="/login" replace={true}></Navigate>}
    </>
)
}
