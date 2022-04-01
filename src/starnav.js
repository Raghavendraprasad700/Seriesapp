import "./starnav.css"
import acu from "./img/ASUlogo.svg"

const Starnav = () => {
    return ( 
        <div className="nav">
           
           <div className="logo">
                    <a href=""><img src={acu} alt=""/></a>
           </div>
           
            <ul>
                <li>Home</li>
                <li>Student Support</li>
                <li>Degree Search</li>
                <li>FAQ</li>
                <li>Work for Starbucks</li>
            </ul>

            <div className="button">
                <button className="bt1"><b>Get info</b> </button>
                <button className="bt2"><b>Apply Now</b> </button>
            </div>
    


        </div>
     );
}
 
export default Starnav;