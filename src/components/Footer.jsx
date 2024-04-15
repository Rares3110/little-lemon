import logo from '../assets/Logo_Footer.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <img src={logo}/>
            <section className='link-list'>
                <h4>Doormat Navigation</h4>
                <ul>
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
            </section>
            <section className='link-list'>
                <h4>Contact</h4>
                <ul>
                    <li>
                        <a href="">Adress</a>
                    </li>
                    <li>
                        <a href="">Phone Number</a>
                    </li>
                    <li>
                        <a href="">Email</a>
                    </li>
                </ul>
            </section>
            <section className='link-list'>
                <h4>Social Media Links</h4>
                <ul>
                    <li>
                        <a href="">Instagram</a>
                    </li>
                    <li>
                        <a href="">Facebook</a>
                    </li>
                    <li>
                        <a href="">Twitter</a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;