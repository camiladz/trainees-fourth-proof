import cart from "./../../assets/cart.svg";
import logo from "./../../assets/logo.svg";
import profileIcon from "./../../assets/profile-icon.svg";
import searchIcon from "./../../assets/searchIcon.svg"

const Header = () => {
    return (

        <div className="header-main">
            <div className="header-main-content">
                <div className="header-content--logo">
                    <img src={logo} className="header-content--logo-icon" />
                </div>
                <div className="header-main-content-right">
                    <form className="header-content--searchbar">
                        <input type="text" placeholder="O que você procura?" className="searchbar-input" />
                        <img className="input-icon" src={searchIcon} />
                    </form>
                    <div className="header-content--right">
                        <div className="header-content--right-my-account">
                            <img src={profileIcon} className="header-profileIcon" />
                            <span className="header-content--right-text"> Minha conta</span>
                        </div>
                        <img src={cart} alt="" className="minicart-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header