import './CardButton.css'
import button from "../Button/Button.jsx";

function CardButton({ children, className }) {

    const buttonClass = `card-button${ className ? ` ${className}` : ''}`;
    return (
        <button className={buttonClass} >
            {children}
        </button>
    )
}

export default CardButton;