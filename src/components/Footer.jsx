import logo from '../assets/Logo_Footer.png'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <img src={logo}/>
            <section className='link-list'>
                <h4>Doormat Navigation</h4>
                <ul>
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
            </section>
            <section className='link-list'>
                <h4>Contact</h4>
                <ul>
                    <li>
                        <a onClick={() => navigate('/')}>Adress</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/')}>Phone Number</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/')}>Email</a>
                    </li>
                </ul>
            </section>
            <section className='link-list'>
                <h4>Social Media Links</h4>
                <ul>
                    <li>
                        <a onClick={() => navigate('/')}>Instagram</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/')}>Facebook</a>
                    </li>
                    <li>
                        <a onClick={() => navigate('/')}>Twitter</a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;