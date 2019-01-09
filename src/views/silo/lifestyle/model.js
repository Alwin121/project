import axios from "axios"

function getSwiper(){
	return  axios({
			url:"http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000004&platform_code=PLATEFORM_H5",
			
		}).then(res=>{
			// console.log(res.data,3);
			return res.data.banners;
	})

}//getSwiper
function getAd(id){
	return  axios({
			url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${id}&timestamp=1546944734379&summary=c885aaa8145c3653d841fe3b0fced752&platform_code=H5`,
			
		}).then(res=>{
			console.log(res.data.eventList,3);
			return res.data.eventList;
	})

}//getSwiper

export {getSwiper,getAd}

