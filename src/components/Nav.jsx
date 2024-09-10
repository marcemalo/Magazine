import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav">
        <div className="navwwraper">
        <ul className="ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Nav