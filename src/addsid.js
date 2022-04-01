import Serieslist from "./SeriesList"
import { useState, useEffect } from "react";


const Sidebar = () => {

    let[seriesData,setData]=useState([])

useEffect (() =>{
  fetch("http://localhost:5000/series")
      .then(res =>{
        return res.json();
      })
      .then(data =>{
        setData(data)
      })
},[])

let clickimage = (id)=> {
    let newData =  seriesData.filter((value) => value.id != id)
    setData(newData)
    }

    return ( 
        <div>
            <Serieslist data={seriesData} pageTitle="Language Series" delete={clickimage} />
            <Serieslist data={seriesData.filter((value)=> value.language=="English")} />
            <Serieslist data={seriesData.filter((value)=> value.language=="Hindi")} pageTitle="Popular Hindi Series" />   
        </div>
     );
}
 
export default Sidebar;