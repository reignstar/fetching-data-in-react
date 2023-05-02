import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './View.css';

const View = () => {
    
    const [users, setUsers] = useState(null);
    const navigate = useNavigate()  
    let { id }  = useParams();
    useEffect(() => {
  
      fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
      .then(response => response.json())
      .then(json => setUsers(json))
    
  },[]);

  const handleDelete = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  }


  return ( 
    <div className='viewItem'>
       {users && users.map((users) => {
        if(users.id === Number(id)  ){
        return(
          <div className="users-preview"  key={users.id}> 
           <p> <b>Title:</b> { users.title }</p>
           <img width="70px" src={users.url}/><br></br>
          
             
        <button onClick={() => handleDelete(users.id)}>delete user</button>  
        <button onClick={()=> navigate("/")}>Return to users</button>  
          </div>
        )
        }
      })  } 
    </div>
 );
  };
 
export default View;

