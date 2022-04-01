import { useState } from "react";
import "./prHome.css"
import del from "./images/delete.jpeg"
import List from "./prlist"

const PrHome = () => {

    let[Newmovie,setMovie] = useState([{Title:"KGF-2",Hero:"Yash",language:"Kannada",id:1},
                                       {Title:"RRR",Hero:"NTR",language:"Telgu",id:2},
                                       {Title:"IronMan",Hero:"Robert jr",language:"English",id:3},
                                       {Title:"Karnan",Hero:"Dhanush",language:"Tamil",id:4}
                                    ])

    let clickimage = (id) =>{
        let newm = Newmovie.filter((any) =>any.id!=id)
        setMovie(newm)
    }

  return (
      
     <div>

         <div>
             <List data={Newmovie} pagetitle="Popular Movie"/>
         </div>



     </div>
  )
}
 
export default PrHome;