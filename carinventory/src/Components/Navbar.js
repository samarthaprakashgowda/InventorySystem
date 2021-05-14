import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          {/* <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
        <nav className="navbar">
          {/* <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'> */}
              {/* <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link> */}
            {/* </li> */}
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          {/* </ul> */}
        </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;