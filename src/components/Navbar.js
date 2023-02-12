import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    <ul className="navbar">
      <li>
        <NavLink to="/">Главная</NavLink>
      </li>
      <li>
        <NavLink to="/posts/new">Создать пост</NavLink>
      </li>

    </ul>

  )
}
export default Navbar;