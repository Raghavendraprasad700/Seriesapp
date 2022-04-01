import Mug from "./img/mug.png"
import "./star1.css"

const Imagebox = () => {
    return ( 

        <div className="green" >
            <div className="text">
                <h1>Quality support 
                    <br />
                    crafted for you</h1>
                <p>Resources for Starbucks students at ASU Online</p>
            </div>
            <img src={Mug} alt="" />
        </div>
     );
}
 
export default Imagebox;