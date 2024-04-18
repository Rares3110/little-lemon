import './HomeMain.css'
import SaladImage from '../../assets/Greek_Salad.jpg'
import BruschettaImage from '../../assets/bruschetta.svg'
import LemonDesertImage from '../../assets/Lemon_Dessert.jpg'
import FoodItemCard from './FootItemCard'
import InformativeUp from '../../assets/Informative-Up.jpg'
import InformativeDown from '../../assets/Informative-Down.jpg'
import Profile1 from '../../assets/profile_1.jpg'
import Profile2 from '../../assets/profile_2.jpg'
import Profile3 from '../../assets/profile_3.jpg'
import Profile4 from '../../assets/profile_4.jpg'
import ReviewCard from './ReviewCard'

const foodItems = [
    {
        title: 'Greek salad',
        price: 12.99,
        image: SaladImage,
        description: `
            The famous greek salad of crispy lettuce, peppers, olives
            and our Chicago style feta cheese, garnished with crunchy
            garlic and rosemary croutons.
        `
    },
    {
        title: 'Bruchetta',
        price: 5.99,
        image: BruschettaImage,
        description: `
            Our bruschetta is made from grilled bread with garlic and
            seasoned with salt and olive oil.
        `
    },
    {
        title: 'Lemon Dessert',
        price: 4.99,
        image: LemonDesertImage,
        description: `
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and  is as authentic as can be
            imagined.
        `
    }
]

const reviewers = [
    {
        rating: 4.5,
        name: 'Emily',
        profile: Profile1,
        review: 'Loved Little Lemon! Amazing flavors, cozy atmosphere, and friendly staff. Will be back!'
    },
    {
        rating: 4.8,
        name: 'Alexander',
        profile: Profile2,
        review: 'Hidden gem! Authentic food, great ambiance, highly recommend.'
    },
    {
        rating: 4.5,
        name: 'Sophia',
        profile: Profile3,
        review: 'Little Lemon exceeded expectations! Delicious food and inviting ambiance.'
    },
    {
        rating: 4.9,
        name: 'Jasmine',
        profile: Profile4,
        review: 'Must-visit! Fantastic Mediterranean cuisine and exceptional service.'
    }
]

const HomeMain = () => {
    return (
        <main>
            <section className="food-section">
                <div className="flex-row-between">
                    <h1 className="black-text">This weeks specials!</h1>
                    <button>Online Menu</button>
                </div>
                <ul className="food-items-list">
                    {
                        foodItems.map(item => <FoodItemCard key={item.title} {...item}/>)
                    }
                </ul>
            </section>
            <section className="review-section">
                <h2>Testimonials</h2>
                <ul className="reviews-list">
                    {
                        reviewers.map(reviewer => <ReviewCard key={reviewer.name} {...reviewer}/>)
                    }
                </ul>
            </section>
            <section className="informative-section">
                <article className="restaurant-article">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Welcome to Little Lemon, a cozy restaurant tucked away in the heart
                        of the city, offering a delicious taste of the Mediterranean. Stepping
                        inside, you're greeted by a warm and inviting atmosphere, with soft
                        lighting and Mediterranean-inspired décor creating a relaxed ambiance.
                        <br/>
                        <br/>
                        Our open kitchen buzzes with activity as skilled chefs prepare an array
                        of mouthwatering dishes using fresh, locally sourced ingredients and
                        time-honored recipes.
                    </p>
                </article>
                <div className='presentation'>
                    <img src={InformativeUp}/>
                    <img src={InformativeDown}/>
                </div>
            </section>
        </main>
    )
}

export default HomeMain;