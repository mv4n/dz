import './JournalItem.css'

function JournalItem({ title, text, date }) {
    const formattedDate = new Intl.DateTimeFormat('uk').format(new Date(date));
    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <div className="journal-item__body">
                <p className="journal-item__date">{formattedDate}</p>
                <p className="journal-item__text">{text}</p>
            </div>
        </>
    )
}

export default JournalItem;