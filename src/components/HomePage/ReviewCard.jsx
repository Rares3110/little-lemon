import './ReviewCard.css';
import { FaStar } from "react-icons/fa";

const ReviewCard = props => {
    return (
        <li className="review-card">
            <span>{props.rating} <FaStar/></span>
            <div>
                <img src={props.profile}/>
                <span>{props.name}</span>
            </div>
            <p>{props.review}</p>
        </li>
    );
}

export default ReviewCard;