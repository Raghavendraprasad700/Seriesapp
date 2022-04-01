import tr1 from "./images/tr1.jpeg"
import tr2 from "./images/tr2.jpeg"
import box from "./images/box.jpeg"


import "./navee.css"

const Discription = () => {
    return (
        <div className="main" style={{display:"flex"}}>

            <div className="txt">
                <h4>Description</h4><br />
                <p>
                    Ingredients: Water, Organic Whole Wheat Flour, Organic Cracked Whole Wheat, <br />
                    Organic Cane Sugar, Organic Grain and Seed Topping Mix (Organic Flax Seeds, <br />
                    Organic Sunflower Seeds, Organic Brown Sesame Seeds, Organic Triticale Flakes <br />
                    [Wheat], Organic Barley Flakes, Organic Oat Flakes, Organic Pumpkin Seeds, <br />
                    Organic Rye Flakes, Organic Black Sesame Seeds, Organic Millet, Organic Spelt <br />
                    Flakes [Wheat], Organic Yellow Cornmeal, Organic Kamut Khorasan Wheat <br />
                    Flakes, Organic Quinoa, Organic Poppy Seeds), Organic Wheat Gluten.
                </p>
            </div>

            <div className="Shipping">
                <img src={tr1} /> <span>15th - 17th September (Expedited shipping)</span>
                <img src={tr2} /> <span>20th - 21st September (Standard shipping) </span>            <span>Select Standard Shipping </span>
                <img src={box} /> <span>Secured Packing</span>
            </div>

        </div>
    );
}

export default Discription;