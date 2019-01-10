import axios from 'axios'

function getList(){
    return axios({
        url:`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000005&ids=2120000100000000146&timestamp=1547081817109&summary=e3079952c07a2378358a9b836fd066e0&platform_code=H5`
    }).then(res=>{
        //console.log(res.data.resultList)
        return res.data.resultList
    })
}

function getBanner(){
    return axios({
        url:`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000005&platform_code=PLATEFORM_H5`
    }).then(res=>{
        
        return res.data.banners
    })
}
export {getList,getBanner}
