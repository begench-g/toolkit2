import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import { updateEmail, updateUsername } from "../store/user/userSlice"

export const UserForm = () =>{
    const dispatch = useDispatch<AppDispatch>()
    return(
        <form>
             <label htmlFor="username">UserName</label>
             <input type="text" id="username"
             onChange={(e)=>{
                    dispatch(updateUsername(e.target.value))
                }} />

             <label htmlFor="username">Email</label>
             <input type="text" id="email" 
            onChange={(e)=>{
                dispatch(updateEmail(e.target.value))
            }}
             />

             <button>Save</button>
        </form>
       
    )
}