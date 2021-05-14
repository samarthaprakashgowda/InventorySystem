import { Link } from 'react-router-dom';
import { NavbarData } from './NavbarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <nav className="navbar">
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;