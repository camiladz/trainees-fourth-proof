import closeIcon from "./../../assets/close-icon.svg";

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar--left">
                <img src="" className="top-bar--icon" />
                <span className="top-bar--text">
                    Insira aqui o texto ou informação relevante que deseja comunicar
                </span>
                <img src={closeIcon} className="top-bar--close-button" />
            </div>
        </div>
    )
}

export default TopBar