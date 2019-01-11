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
//key=&sort=&timestamp=1547210428001&summary=58d7d135839f6c34050f999af299a5d9&platform_code=H5
//key=1&sort=ASC&timestamp=1547210540088&summary=9b2c3456fda61087016092342c356423&platform_code=H5
//key=&sort=ASC&timestamp=1547210590872&summary=6fa2e4dff2a752acb2a1ff670f1a494f&platform_code=H5