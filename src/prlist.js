import del from "./images/delete.jpeg"



const List = (props) => {

  let Newmovie = props.data;
// let clickimage = props.del;

    return ( 
        <div className="main1">
          <h1>Topmovies</h1>
          <hr />
          {Newmovie.map((any)=>{
              return(
                <div className="list">
                        <h1>Title:{any.Title}</h1>
                        <h3>Hero:{any.Hero}</h3>
                        <h3>language:{any.language} </h3>  
                        {/* <img id="del" src={del} alt="" onClick={()=>clickimage(any.id)}/> */}
                </div>
              );
          }
          )}
      </div>

     );
}
 
export default List;