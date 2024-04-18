import './BookingHeader.css'
import Image from '../../assets/restaurant.jpg'

const BookingHeader = () => {
    return (
        <header className="reservation-header">
            <h1>Reservations</h1>
            <img src={Image}/>
        </header>
    )
}

export default BookingHeader