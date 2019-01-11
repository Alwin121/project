import axios from "axios"

function getheaderbar(id){
    // console.log(id,4646466464664664646464664)
	return  axios({
        url:`http://www.mei.com/appapi/brand/product/secCategoryProduct/v3?logoId=${id}&pageIndex=1`
                
            }).then(res=>{
                return res.data;
            })
                
          
}//getSwiper

export {getheaderbar}

// 3616200100000001248