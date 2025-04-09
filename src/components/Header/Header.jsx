import './Header.css'
import SelectUser from "../SelectUser/SelectUser.jsx";

function Header() {
    return (
        <header className="header">
            <img className="header-logo" src="/images/journal-svgrepo-com.svg" alt="logo" />
            <p>my Journal</p>

            <SelectUser/>
        </header>

    );
}

export default Header