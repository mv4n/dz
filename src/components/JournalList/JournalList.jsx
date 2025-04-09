import JournalItem from "../JournalItem/JournalItem.jsx";
import CardButton from "../CardButton/CardButton.jsx";
import {useContext, useState} from "react";
import {UserContext} from "../../context/user.context.jsx";

function JournalList({ data }) {
    const [sortType, setSortType] = useState('dateAsc');
    const { userId } = useContext(UserContext)
    const SORT_TYPES = {
        dateAsc: sortByDateAsc,
        dateDesc: sortByDateDesc,
        titleAsc: sortByTitleAsc,
        titleDesc: sortByTitleDesc
    }

    function sortByDateAsc(a ,b) {
        return b.date - a.date;
    }
    function sortByDateDesc(a ,b) {
        return a.date - b.date;
    }
    function sortByTitleAsc(a ,b) {
        if (b.title > a.title) {
            return -1
        } else {
            return 1
        }
    }
    function sortByTitleDesc(a ,b) {
        if (b.title < a.title) {
            return -1
        } else {
            return 1
        }
    }

    function selectTypeHandler(e) {
        setSortType(() => e.target.value);
    }
    data = data || [];
    if(data.length > 0){
        return (
            <>
                <select value={sortType} onChange={selectTypeHandler}>
                    <option value="dateAsc">dateAsc</option>
                    <option value="dateDesc">dateDesc</option>
                    <option value="titleAsc">titleAsc</option>
                    <option value="titleDesc">titleDesc</option>
                </select>
                {
                    data.filter(item => item.userId === userId).sort(SORT_TYPES[sortType]).map(item => (

                        <CardButton key={item.id} className="card">

                            <JournalItem title={item.title} date={item.date} text={item.text}/>
                        </CardButton>
                    ))
                }
            </>
        )
    } else {
        return (
            <p>click to +New memorise to add first memorise</p>
        )
    }
}

export default JournalList;