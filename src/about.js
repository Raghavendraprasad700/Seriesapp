import film from "./images/series.jpeg"


const Aboutjs = () => {
    return ( 

        <div className="description">
        <h1>About</h1>

        <img src={film} alt="" />
        <p style={{textAlign:"right", display:"flex"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, praesentium sint. 
            Nesciunt natus officia nobis soluta? Assumenda id magnam delectus consectetur distinctio dolorem sapiente ratione,
             dignissimos porro velit natus, deleniti debitis. Mollitia ab nesciunt fuga hic commodi optio a eius aperiam nemo
              ducimus quaerat atque dicta, quas beatae non, soluta eligendi similique illum voluptate recusandae! Earum, 
              repellendus repudiandae? Inventore excepturi sed, placeat aperiam unde ex sint libero repudiandae 
              provident quaerat ab delectus! Dignissimos, accusantium cumque aut laboriosam doloribus dicta.</p>
      </div>
     );
}
 
export default Aboutjs;