import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Userlist = ({users, handleDelete}) => {
    const navigate = useNavigate()  

    const [show, setShow] = useState(null)
    const handleChange = (value) => {
        if(!show){
            setShow(value)
        }else{
            setShow(null)
        }
      };

      

    return (
        <div className="user-list">
        {
            users.map((users) => {
                return <User users={users} handleChange={handleChange} show={show} navigate={navigate} handleDelete={handleDelete} />
            })
        }
    </div>

    )  
}

const User = ({users, handleChange, show, navigate, handleDelete}) => {
   
    return (
       
        <div className="users-preview" key={users.id}> 
        <p> <b>Title:</b> { users.title }</p>
        <img width="200px" src={users.url}/><br></br>
        <button onClick={() => handleChange(users.id)}> {show === users.id ? "hide" : "more actions"} </button>

        { show === users.id ?  <> <button onClick={() => handleDelete(users.id)}>delete photo</button>
         <button onClick={()=> navigate(`/viewmore/${users.id}`)}> viewmore</button>
         </> : null }
         
        </div>
    )
}
 
export default Userlist;