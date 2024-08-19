import './Header.css';
function Header() {
    return(
        <div className="Header">
            <h1
            >Registrar Dashboard</h1>
            <div className="user-info">
                <div className={'initials'}>
                    <span
                    >ZF</span>
                </div>
                <div className={"profile-info"}>
                    <p id={"user-name"}>Zelalem Fisseha</p>
                    <p id={"office-name"}>Registrar Office</p>
                </div>
            </div>
        </div>
    )


}

export default Header;