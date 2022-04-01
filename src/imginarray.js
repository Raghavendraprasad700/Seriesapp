let imgArr =[(
    {image:"https://pyxis.nymag.com/v1/imgs/6d8/3f7/539dc70ba82f8e4561d87317d88b633e3d-got-set.rdeep-vertical.w245.jpg"},
    {image:"https://wallpapershome.com/images/pages/pic_v/15195.jpg"},
    {image:"https://wallpapershome.com/images/pages/pic_v/15195.jpg"},
    {image:"https://wallpapershome.com/images/pages/pic_v/15195.jpg"}
)]

return
(
    <div className="data">
        <div className="popularSeries">
            {imgArr.map((value)=>{  
                return(
                    <img src={value.image} alt="" height="500px" width="350px" />
                )
            })

            }
        </div>
    </div>
    
)