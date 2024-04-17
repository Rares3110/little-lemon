import Navigation from "../components/Navigation";
import HomeHeader from '../components/HomePage/HomeHeader';
import HomeMain from '../components/HomePage/HomeMain';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <Navigation active='home'/>
            <HomeHeader/>
            <HomeMain/>
            <Footer/>
        </>
    );
}

export default HomePage;