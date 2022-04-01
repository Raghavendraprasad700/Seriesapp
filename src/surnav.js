import Tele from "./images/whtele.jpg"
import Att from "./images/wa.png"
import Pin from "./images/location.jpg"
import Wifi from "./imgsur/images.png"
import Paypal from "./imgsur/paypal.png"
import Ampy from "./imgsur/amex.png"
import Ring from "./imgsur/rings.png"
import Visa from "./imgsur/visa.png"
import Fb from "./imgsur/fb.png"
import Pst from "./imgsur/plstr.png"
import In from "./imgsur/in.png"
import Twt from "./imgsur/twitter.png"


import "./surnav.css"


const Surnav = () => {
    return ( 
        <div className="all">

            <div className="submain">
        
                <div className="img1">
                        <img src={Tele} alt="" /><br />
                        <img src={Att} alt="" /><br />
                        <img src={Pin} alt="" />
                </div>

                <div className="num">
                        <p>1800 420 0707 </p> <br />
                        <p>customercare@company.com </p> <br />
                        <p>Address line 1Address line 2</p>  
                </div>
                
                <div  >
                    <p><b>COMPANY</b></p>
                    <br />
                    <p>About Us</p><br />
                    <p>Sell With us</p><br />
                    <p>Our Sellers</p>
                </div>


                <div>
                    <b>INFORMATION</b><br /> <br />
                    <p>Privacy Policy</p> <br />
                    <p>Exchange and Returns Policy</p><br />
                    <p>Terms and conditions</p><br />
                    <p>Common questions  </p>
                </div>

                <div className="social">
                    <b>SUBSCRIBE NEWSLETTER</b> <br />
                    <input type="text" placeholder="Enter your email address" />
                    <button>Submit</button><br /><br />
                        <img src={Fb} alt="" />
                        <img src={Pst} alt="" />
                        <img src={In} alt="" />
                        <img src={Twt} alt="" />
                </div>   
            </div>

        <div className="pay">
               <b>PAYMENT METHODS</b> <br /> <br />
               <img src={Wifi} alt="" />
               <img src={Paypal} alt="" />
               <img src={Ring} alt="" />
               <img src={Ampy} alt="" />
               <img src={Visa} alt="" />
        </div>

        <hr />

        <div className="bott" style={{ backgroundColor: "black" }}>
    
               <p>Copyrights 2021 Company Ltd. All right reserved.</p>
    
        </div>

    </div>
     );
}
 
export default Surnav;