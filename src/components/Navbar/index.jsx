import Link from "./Link";
import Logo from "./Logo";
import Title from "./Title";
import "./style.css";

const Navbar = () => {
    return (
        <>
            <nav>
            <div className="navbar">
                <Logo />
                <Title>Jakampus Gunadarma</Title>
            </div>
            <div className="link-container">
                <Link href="#">Home</Link>
                <Link href="#">Members</Link>
            </div>
            </nav>
        </>
    )
}

export default Navbar;