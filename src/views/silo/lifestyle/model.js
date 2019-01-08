import axios from "axios"

function getSwiper(){
	return  axios({
			url:"http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5",
			
		}).then(res=>{
			console.log(res.data,3);
			return res.data.banners;
	})

}//getSwiper
export {getSwiper}