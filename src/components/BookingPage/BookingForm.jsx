import { useNavigate } from 'react-router-dom'
import './BookingForm.css'
import { useEffect, useState } from 'react';

const isInteger = (s) => {
    return /^\d+$/.test(s);
}

const parseDateStringToDate = (dateString) => {
    const parts = dateString.split('-');
    return new Date(parts[0], parts[1] - 1, parts[2]);
}

const oneDayInMillis = 24 * 60 * 60 * 1000;

const BookingForm = (props) => {
    const navigate = useNavigate();
    const [dateValid, setDateValid] = useState(true);
    const [guestsVerif, setGuestsVerif] = useState({ touched: false, valid: false });

    useEffect(() => {
        if (!isInteger(props.info.guests) || props.info.guests < 1 || props.info.guests > 10) {
            setGuestsVerif(old => {
                return {
                    ...old,
                    valid: false
                }
            });
        } else {
            setGuestsVerif(old => {
                return {
                    ...old,
                    valid: true
                }
            });
        }
    }, [props.info.guests]);

    useEffect(() => {
        setDateValid(parseDateStringToDate(props.info.date) < new Date() - oneDayInMillis ? false : true);
    }, [props.info.date]);

    return (
        <form className="booking-form">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={props.info.date}
                style={{
                    borderColor: !dateValid ? 'red' : '#333333',
                    color: !dateValid ? 'red' : '#333333'
                }}
                onChange={(event) => props.setInfo(lastValue => {
                    return {
                        ...lastValue,
                        date: event.target.value
                    }
                })} />
            <span className="validation-span"
                style={{
                    visibility: !dateValid ? 'visible' : 'hidden'
                }}>
                The day cannot be in the past!
            </span>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={props.info.time}
                onChange={(event) => props.setInfo(lastValue => {
                    return {
                        ...lastValue,
                        time: event.target.value
                    }
                })}>
                {
                    props.availableTimes.map(time => <option key={time} value={time}>{time}</option>)
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests"
                value={props.info.guests}
                style={{
                    borderColor: guestsVerif.touched && !guestsVerif.valid ? 'red' : '#333333',
                    color: guestsVerif.touched && !guestsVerif.valid ? 'red' : '#333333'
                }}
                onChange={(event) => {
                    props.setInfo(old => {
                        return {
                            ...old,
                            guests: event.target.value
                        }
                    });

                    setGuestsVerif(old => {
                        return {
                            ...old,
                            touched: true
                        }
                    });
                }} />
            <span className="validation-span" style={{
                visibility: guestsVerif.touched && !guestsVerif.valid ? 'visible' : 'hidden'
            }}>
                Guests between 1 and 10!
            </span>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={props.info.occasion}
                onChange={(event) => props.setInfo(lastValue => {
                    return {
                        ...lastValue,
                        occasion: event.target.value
                    }
                })}>
                <option value="None">-</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit"
            onClick={() => navigate('/booking/confirmation')}
            value="Make Your reservation"
            disabled={!dateValid || !guestsVerif.valid}/>
        </form>
    )
}

export default BookingForm;