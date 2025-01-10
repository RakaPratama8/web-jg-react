import logoJakampus from "../../assets/logo.jpeg";

import "./style.css";

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoJakampus} alt="JG Logo" />
        </div>
    );
}

export default Logo;