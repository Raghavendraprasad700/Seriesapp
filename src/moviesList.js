import { useState } from "react";
const MoviesList=()=>{
 let[seriesData,setData]=useState([
   {
     title:"Pirates of the Caribbean",
     cast:"Jhonny Depp",
     quote:"Gambling Tortuga",
   },
   {
    title:"Thor",
    cast:"ChrisHemsworth",
    quote:"I knew it",
  },
  {
    title:"James",
    cast:"Puneeth Rajkumar",
    quote:"I break records",
  },
  {
    title:"IronMan",
    cast:"Robert Downey Jr.",
    quote:"Its cool",
  },
  {
    title:"Mungarumale",
    cast:"Ganesh",
    quote:"Devdas",
  }
 ])
  return(
    <div className="Movies">
      <div className="MovieData">
{seriesData.map((value)=>{
return(
  <div className="display">
    <h3>Title:{value.title}</h3>
    <h4>Cast:{value.cast}</h4>
    <h5>FamousQuote:{value.quote}</h5>
  </div>

)
})}
</div>
</div>
  );
}
export default MoviesList;

