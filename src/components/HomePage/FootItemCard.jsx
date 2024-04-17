import './FoodItemCard.css';
import { MdDeliveryDining } from "react-icons/md";

const FoodItemCard = props => {
    return (
        <li className='card'>
            <img src={props.image}/>
            <section>
                <div>
                    <h3>{props.title}</h3>
                    <span>$ {props.price}</span>
                </div>
                <p>{props.description}</p>
                <button className="order-button">Order a delivery <MdDeliveryDining/></button>
            </section>
        </li>
    )
}

export default FoodItemCard