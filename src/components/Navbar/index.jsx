import Logo from "./Logo";
import Title from "./Title";
import "./style.css";

const Navbar = () => {
    return (
        <>
            <nav
                className="navbar"
            >
                <Logo />
                <Title>
                    Jakampus Gunadarma
                </Title>
            </nav>
        </>
    )
}

export default Navbar;