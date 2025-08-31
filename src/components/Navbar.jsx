import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <nav>
            <Link to='/Home'><li>home</li></Link>
            </nav>
        </div>
    )
}

export default Navbar
