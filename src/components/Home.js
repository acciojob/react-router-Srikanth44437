import {Link} from "react-router-dom";
const Home = () => {
    return (
        <div>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <h1>Welcome to my website!</h1>
        </div>
    )
}

export default Home;