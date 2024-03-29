import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <h1>Welcome to my website!</h1>
        </>
    )
}

export default Home;