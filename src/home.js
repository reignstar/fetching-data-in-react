import { useState, useEffect } from 'react';
import Userlist from './users';

const Home = () => {
     //eslint-disable-next-line
    const [users, setUsers] = useState(null);
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
        <div className="Home">
          {users && <Userlist users={users}  handleDelete={handleDelete} /> }          
        </div>
     );
}
 
export default Home;