import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes=()=> {
    const token = localStorage.getItem('token')

    // if token / show page : navigate to login 
    const content = token ? <Outlet/> : <Navigate to='/login'/>
    return content
}