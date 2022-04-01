import "./prnav.css"

import Home from "./images/home.jpeg"
import About from "./images/about.jpeg"
import support from "./images/support.jpeg"



const prNav = () => 
{
    return ( 
        <div className="navdata">
            <div className="Main">
               <h3>Movie Center</h3> 
            </div>

            <div className="input">
                 <input type="text" placeholder="Search for movie"/>
            </div>
            

            <div className="Navimg">
                <ul>
                  <a href=""><li><img src={Home} alt="" /></li></a> 
                  <a href=""> <li><img src={About} alt="" /></li></a> 
                  <a href=""><li><img src={support} alt="" /></li> </a> 

                </ul>
            </div>

            
        </div>
     );
}
 
export default prNav;