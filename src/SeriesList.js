import deleted from "./images/delete.jpeg"

  
  const Serieslist = (props) => {
  let seriesData = props.data;
  let title = props.pageTitle;
  let clickimage=props.delete;

    return ( 
        <div className="SeriesData">
          <h1>{title}</h1>
        {seriesData.map((value)=>{
        return(

          <div className="display">
            <h3>Title:{value.title}</h3>
            <h4>Genre:{value.genre}</h4>
            <h5>Famousquote:{value.quote}</h5>
            <img id="del" src={deleted}  width="30px" alt="" onClick={()=>clickimage(value.id)}/>
          </div>
        );
        })}
        </div>
     );
}

export default Serieslist;