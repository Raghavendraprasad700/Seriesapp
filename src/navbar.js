
import home from './images/home.jpeg'
import about from './images/about.jpeg'
import support from './images/support.jpeg'
import add from './images/add.jpg'
import Nextpage from './images/nxtpage.png'
import PagenotFound from './images/support.jpeg'



import {Link}  from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav" >
            <div className="logo">
                <h1>Series Content</h1>
            </div>
            <div className="navlinks">
                <ul>
                <li id="a2"><Link to="/"><img src={home} alt="" /></Link>  </li>
                <li id="a2"><Link to="/about"><img src={about} alt="" /> </Link>  </li>
                <li id="a2"><Link to="/Form"> <img src={add} alt="" /> </Link> </li>
                <li id="a2"><Link to="/addsid"><img src={Nextpage} alt="" /></Link>  </li>
                <li id="a2"><Link to="/404"><img src={PagenotFound} alt="" /></Link>  </li>


                </ul>
            </div>
        </div>
    );
}

export default Navbar;