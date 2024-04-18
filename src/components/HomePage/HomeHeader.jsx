import './HomeHeader.css'
import RestaurantImage from '../../assets/restaurantfood.jpg'
import { useNavigate } from 'react-router-dom'

const HomeHeader = () => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="bg-green-decoration"/>
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned
                    Mediterranean restaurant,
                    focused on traditional
                    recipes served with a modern
                    twist.
                </p>
                <button onClick={() => navigate('/booking')}>Reserve a Table</button>
            </section>
            <img src={RestaurantImage}/>
        </header>
    )
}

export default HomeHeader;