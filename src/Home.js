
import { useState, useEffect } from "react";
import film from "./images/series.jpeg"
import Serieslist from "./SeriesList"
import "./navbar.css"

const Home=()=>{
// let[seriesData,setData]=useState([])

// useEffect (() =>{
//   fetch("http://localhost:5000/series")
//       .then(res =>{
//         return res.json();
//       })
//       .then(data =>{
//         setData(data)
//       })
// },[])

//   let imgArr =[(
//   {image:"https://pyxis.nymag.com/v1/imgs/6d8/3f7/539dc70ba82f8e4561d87317d88b633e3d-got-set.rdeep-vertical.w245.jpg"},
//   {image:"https://wallpapershome.com/images/pages/pic_v/15195.jpg"},
//   {image:"https://wallpapercave.com/wp/wp5007935.jpg"},
//   {image:"https://www.teahub.io/photos/full/86-863312_game-of-thrones-hd-wallpapers-mobile.jpg"}
// )]

//  let clickimage = (id)=> {
//  let newData =  seriesData.filter((value) => value.id != id)
//  setData(newData)
//  }

//  useEffect(() => {
//    console.log("it works....");
//  },[seriesData])  // if in palce of 2nd value is zero useeffect work for reload & state updates, if empty arry [] means only for reload work, inside an array if we state a 
 

  return(

    <div className="Series">
      <div className="popularSeries">

      {/* {imgArr.map((value)=>{  
                return(
                    <img src={value.image} alt="" height="500px" width="300px"/>
                )
            })

            } */}
            
  <a href="https://youtu.be/7I4LUKNwlyY" target="_blank">   <img src="https://pyxis.nymag.com/v1/imgs/6d8/3f7/539dc70ba82f8e4561d87317d88b633e3d-got-set.rdeep-vertical.w245.jpg" height={"500px"} width={"600px"} alt="" />
   </a>
   <a href="https://youtu.be/7I4LUKNwlyY" target="_blank"> <img src="https://wallpapershome.com/images/pages/pic_v/15195.jpg" height={"500px"} width={"300px"} alt="" />
   </a> 
<a href="https://youtu.be/7I4LUKNwlyY" target="_blank"> <img src="https://wallpapercave.com/wp/wp5007935.jpg" height={"500px"} width={"300px"} alt="" />
  </a>

 <a href="https://youtu.be/7I4LUKNwlyY" target="_blank"> <img src="https://www.teahub.io/photos/full/86-863312_game-of-thrones-hd-wallpapers-mobile.jpg" height={"500px"} width={"300px"} alt="" />
 </a>
 
 
</div>
      <div className="description">
        <img src={film} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, praesentium sint. Nesciunt natus officia nobis soluta? Assumenda id magnam delectus consectetur distinctio dolorem sapiente ratione, dignissimos porro velit natus, deleniti debitis. Mollitia ab nesciunt fuga hic commodi optio a eius aperiam nemo ducimus quaerat atque dicta, quas beatae non, soluta eligendi similique illum voluptate recusandae! Earum, repellendus repudiandae? Inventore excepturi sed, placeat aperiam unde ex sint libero repudiandae provident quaerat ab delectus! Dignissimos, accusantium cumque aut laboriosam doloribus dicta.</p>
      </div>
      

{/* <Serieslist data={seriesData} pageTitle="Language Series" delete={clickimage} />
<Serieslist data={seriesData.filter((value)=> value.language=="English")} />
<Serieslist data={seriesData.filter((value)=> value.language=="Hindi")} pageTitle="Popular Hindi Series" /> */}
{/* <h1>{name}</h1>
<button onClick={handleClick}>click</button> */}
      
</div>
);
}

export default Home;
