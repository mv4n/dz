import './JournalAddButton.css'
import CardButton from "../CardButton/CardButton.jsx";

function JournalAddButton() {
        return (
            <CardButton className="add-button">

                <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="12" width="20" height="6" fill="#fff"/>
                    <rect x="12" y="5" width="6" height="20" fill="#fff"/>
                </svg>

                New memorise
            </CardButton>
        )
}

export default JournalAddButton;