import {useContext} from "react";
import {UserContext} from "../../context/user.context.jsx";

function SelectUser() {

    const {userId, setUserId} = useContext(UserContext);

    function changeUser(e) {
        setUserId(+e.currentTarget.value);
    }

    return (
        <select name="user" id="user" onChange={changeUser} value={userId}>
            <option value="1">Author 1</option>
            <option value="2">Author 2</option>
        </select>
    )
}

export default SelectUser