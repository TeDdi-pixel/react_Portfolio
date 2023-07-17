import '../../../scss/style.scss';
import { Link } from "react-router-dom";

function SupportBtn() {
    return (
        <>
            <Link to="/" className="support-btn">
                Support
            </Link>
        </>
    );
}

export default SupportBtn;