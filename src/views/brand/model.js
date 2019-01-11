import axios from "axios"

function getheaderbar(id){
	return  axios({
        url:`http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=3616200100000001248&pageIndex=1`
                
            }).then(res=>{
                return res.data;
            })
                
          
}//getSwiper

export {getheaderbar}

