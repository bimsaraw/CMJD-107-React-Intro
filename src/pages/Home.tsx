import { useState } from "react";
import Student from "../components/Student";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
    
  const [counter, setCounter] = useState<number>(0);
  const [username,setUsername]  = useState<string>("");

  function increase() {
    const newCount = counter + 1;
    setCounter(newCount);
  }

  function decrease() {
    const newCount = counter - 1;
    setCounter(newCount);
  }

  function handleUsername(event: any) {
    setUsername(event.target.value);
  }

  const { isAuthenticated, login, logout } = useAuth();
  
  return (
    <>
      <h1>Welcome {username}!</h1>

      <Link to="/profile">Profile</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/categories">Categories</Link>

      {isAuthenticated ? <button type="button" onClick={logout}>Logout</button> : "Not Logged In"}

      <div>
        <p>Login with your username</p>
        <input type="text" onChange={handleUsername} />
      </div>


      <h1>{counter}</h1>

      

      <button onClick={increase}>Increase Counter</button>
      <button onClick={decrease}>Decrease Counter</button>
      
      
      <Student name="Bimsara" age={29} />
      <Student name="Gihan" age={23} />
    </>
  )
}

export default Home;