import logo from '../assets/Logo.svg'
import './Navigation.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = props => {

    const navigate = useNavigate();
    const borderBottomWidth = "3px";
    useEffect(
        () => console.log(props.active), [props]
    )

    return (
        <nav>
            <ul>
                <li>
                    <img src={logo}/>
                </li>
                <li>
                    <a style={{borderBottomWidth: props.active === 'home' ? borderBottomWidth : '0px'}} onClick={() => navigate('/')}>Home</a>
                </li>
                <li>
                    <a onClick={() => navigate('/')}>About</a>
                </li>
                <li>
                    <a onClick={() => navigate('/')}>Menu</a>
                </li>
                <li>
                    <a style={{borderBottomWidth: props.active === 'reservations' ? borderBottomWidth : '0px'}} onClick={() => navigate('/booking')}>Reservations</a>
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