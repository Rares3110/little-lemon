import './HomeMain.css'
import SaladImage from '../../assets/Greek_Salad.jpg'
import BruschettaImage from '../../assets/bruschetta.svg'
import LemonDesertImage from '../../assets/Lemon_Dessert.jpg'
import FoodItemCard from './FootItemCard'

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
            <section>
            </section>
            <section>
            </section>
        </main>
    )
}

export default HomeMain;