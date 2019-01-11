import axios from "axios"

function getProductlist(id){
	return  axios({
        url:`http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId=${id}&key=&sort=&timestamp=1547191622513&summary=774dd293874f3395fd9714bc3f158be3&platform_code=H5`
                
            }).then(res=>{
                return res.data;
            })
                
          
}//getSwiper

export {getProductlist}

// 3616200100000001248