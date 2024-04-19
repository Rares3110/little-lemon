import './BookingMain.css'
import BookingForm from './BookingForm'
import { useEffect, useState } from 'react'

const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}`;
}

export const getAvailableTimes = (dateString) => {
    let date = new Date(dateString);

    if(date.getDay() === 0 || date.getDay() === 6) {
        return [
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00'
        ]
    }
    else {
        return [
            '19:00',
            '20:00',
            '21:00'
        ]
    }
}

export const defaultInfo = {
    date: getDate(),
    time: getAvailableTimes(getDate())[0],
    guests: '',
    occasion: 'None'
}

const BookingMain = () => {
    const [info, setInfo] = useState(defaultInfo);
    const [availableTimes, setAvailableTimes] = useState(getAvailableTimes(defaultInfo.date));

    useEffect(() => {
        let newTimes = getAvailableTimes(info.date);

        setAvailableTimes(newTimes)

        if(!newTimes.includes(info.time)) {
            setInfo(lastValue => {
                return {
                    ...lastValue,
                    time: newTimes[0]
                }
            })
        }
    }, [info.date])

    return (
        <main>
            <BookingForm info={info} setInfo={setInfo} availableTimes={availableTimes}/>
        </main>
    )
}

export default BookingMain;