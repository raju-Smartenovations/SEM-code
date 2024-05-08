import { useNavigate } from "react-router-dom"
import "../App.css";

export default function HomePage()
{
    const navigate  = useNavigate()
    return (
        <div  className="App">
            <h1>Home Page</h1>
            <button onClick={()=>navigate('/register')}>Register</button>
            <button onClick={()=>navigate('login')} >Login</button>
        </div>
    )
}