import { useSelector } from "react-redux"
import { RootState } from "../store"
import React from "react"

export const ProfileCard = () => {

    const  userSlice = useSelector((state: RootState)=>state.user )


    return(
        <div>
            <p>{userSlice.id}</p>
            <p>{userSlice.username}</p>
            <p>{userSlice.email}</p>

        </div>
    )
}

export default ProfileCard;