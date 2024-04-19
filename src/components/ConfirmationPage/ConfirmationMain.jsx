import { useNavigate } from 'react-router-dom';
import './ConfirmationMain.css';
import { FcApproval } from "react-icons/fc";

const ConfirmationMain = () => {
    const navigate = useNavigate();

    return (
        <main className="confimation-main">
            <FcApproval/>
            <span>Reservation Successful!</span>
            <button onClick={() => navigate('/')} aria-label="Redirect to Home">Back To Home Page</button>
        </main>
    )
}

export default ConfirmationMain;