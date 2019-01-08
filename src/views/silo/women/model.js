import axios from 'axios'

function getList(){
    return axios({
        url:`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000001&ids=2120000100000000276&timestamp=1546943588234&summary=686d3907ee1627d1dc2aaa81b5c91a4a&platform_code=H5`
    }).then(res=>{
        //console.log(res.data.resultList)
        return res.data.resultList
    })
}

function getBanner(){
    return axios({
        url:`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000001&platform_code=PLATEFORM_H5`
    }).then(res=>{
        
        return res.data.banners
    })
}
export {getList,getBanner}
