import axios from 'axios'

function getList(){
    return axios({
        url:`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000003&ids=2042000100000000431&timestamp=1547047180663&summary=f27cefd8b078a78780f04caaab51ebf6&platform_code=H5`
    }).then(res=>{
        //console.log(res.data.resultList)
        return res.data.resultList
    })
}

function getBanner(){
    return axios({
        url:`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000003&platform_code=PLATEFORM_H5`
    }).then(res=>{
        
        return res.data.banners
    })
}
export {getList,getBanner}
