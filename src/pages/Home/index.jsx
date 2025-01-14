import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div className="home-page">
            <Navbar />
            <Carousel />
            <Content />
            <Footer />
        </div>
    );
}

export default Home;