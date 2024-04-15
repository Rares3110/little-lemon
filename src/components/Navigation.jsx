import logo from '../assets/Logo.svg'
import './Navigation.css'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <img src={logo}/>
                </li>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Menu</a>
                </li>
                <li>
                    <a href="">Reservations</a>
                </li>
                <li>
                    <a href="">Order Online</a>
                </li>
                <li>
                    <a href="">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;