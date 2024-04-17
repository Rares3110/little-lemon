import Navigation from "../components/Navigation";
import Footer from '../components/Footer';
import BookingHeader from "../components/BookingPage/BookingHeader";
import BookingMain from "../components/BookingPage/BookingMain";

const BookingPage = () => {
    return (
        <>
            <Navigation active='reservations'/>
            <BookingHeader/>
            <BookingMain/>
            <Footer/>
        </>
    );
}

export default BookingPage;