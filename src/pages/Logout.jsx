import {  useDispatch } from "react-redux";
import {  resetToken } from "../slices/token";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(resetToken())
        navigate('/login')
    },[dispatch, navigate])
    return(
        <div>logout work !</div>
    )
}