import logo from '../assets/Logo.svg'
import './Navigation.css'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <img src={logo}/>
                </li>
                <li>
                    <a onClick={() => navigate('/')}>Home</a>
                </li>
                <li>
                    <a onClick={() => navigate('/')}>About</a>
                </li>
                <li>
                    <a onClick={() => navigate('/')}>Menu</a>
                </li>
                <li>
                    <a onClick={() => navigate('/booking')}>Reservations</a>
                </li>
                <li>
                    <a onClick={() => navigate('/')}>Order Online</a>
                </li>
                <li>
                    <a onClick={() => navigate('/')}>Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;