import axios from "axios"

function getselected(id){
	return  axios({
        url:`http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.props.match.params.id}`
                
            }).then(res=>{
                return res.data.banners;
            })
                
          
}//getSwiper

export {getselected}

