import './HomeMain.css'
import SaladImage from '../../assets/Greek_Salad.jpg'
import BruschettaImage from '../../assets/bruschetta.svg'
import LemonDesertImage from '../../assets/Lemon_Dessert.jpg'
import FoodItemCard from './FootItemCard'
import InformativeUp from '../../assets/Informative-Up.jpg'
import InformativeDown from '../../assets/Informative-Down.jpg'

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
            <section className="informative-section">
                <article className="restaurant-article">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                        sunt nostrud amet.
                        <br/>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor
                        do amet sint. Velit officia consequat duis enim velit mollit.
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