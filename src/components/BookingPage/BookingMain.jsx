import './BookingMain.css'
import BookingForm from './BookingForm'
import { useState } from 'react'

const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
]

const defaultInfo = {
    date: getDate(),
    time: availableTimes[0],
    guests: null,
    occasion: 'Birthday'
}

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
}

const BookingMain = () => {
    const [info, setInfo] = useState(defaultInfo);

    return (
        <main>
            <BookingForm info={info} setInfo={setInfo} availableTimes={availableTimes}/>
        </main>
    )
}

export default BookingMain