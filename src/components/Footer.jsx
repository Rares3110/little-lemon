import logo from '../assets/Logo_Footer.png'

const Footer = () => {
    return (
        <footer>
            <img src={logo}/>
            <section>
                <h2>Doormat Navigation</h2>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Menu</a>
                    </li>
                    <li>
                        <a>Reservations</a>
                    </li>
                    <li>
                        <a>Order Online</a>
                    </li>
                    <li>
                        <a>Login</a>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Contact</h2>
                <ul>
                    <li>
                        <a>Adress</a>
                    </li>
                    <li>
                        <a>Phone Number</a>
                    </li>
                    <li>
                        <a>Email</a>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Social Media Links</h2>
                <ul>
                    <li>
                        <a>Instagram</a>
                    </li>
                    <li>
                        <a>Facebook</a>
                    </li>
                    <li>
                        <a>Twitter</a>
                    </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;