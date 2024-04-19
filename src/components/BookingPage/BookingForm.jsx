import { useNavigate } from 'react-router-dom'
import './BookingForm.css'

const BookingForm = (props) => {
    const navigate = useNavigate();

    return (
        <form className="booking-form">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={props.info.date}
                onChange={(event) => props.setInfo(lastValue => {
                    return {
                        ...lastValue,
                        date: event.target.value
                    }})}/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={props.info.time}
                onChange={(event) => props.setInfo(lastValue => {
                    return {
                        ...lastValue,
                        time: event.target.value
                    }})}>
                    {
                        props.availableTimes.map(time => <option key={time} value={time}>{time}</option>)
                    }
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={props.info.guests ? props.info.guests : ''}
                onChange={(event) => props.setInfo(lastValue => {
                    return {
                        ...lastValue,
                        guests: event.target.value
                    }})}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={props.info.occasion}
                onChange={(event) => props.setInfo(lastValue => {
                    return {
                        ...lastValue,
                        occasion: event.target.value
                    }})}>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                <input type="submit" onClick={() => navigate('/booking/confirmation')} value="Make Your reservation" />
            </form>
    )
}

export default BookingForm;