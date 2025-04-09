import './Button.css'

function Button( { text, onClick, addClass } ) {
    const buttonClass = `button${ addClass ? ` ${addClass}` : ''}`;

    return (
        <button className={buttonClass} onClick={onClick}>{text}</button>
    )
}

export default Button