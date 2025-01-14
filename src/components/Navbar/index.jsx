import Link from "./Link";
import Logo from "../Logo";
import Title from "./Title";
import "./style.css";
import logoJak from "../../assets/logo.jpeg";

const Navbar = () => {
    return (
        <>
            <nav>
            <div className="navbar">
                <Logo 
                    src={logoJak}
                    alt="logo"
                    width="200"
                />
                <Title>Jakampus Gunadarma</Title>
            </div>
            <div className="link-container">
                <Link href="/">Home</Link>
                <Link href="/members">Members</Link>
            </div>
            </nav>
        </>
    )
}

export default Navbar;