import axios from 'axios'

function getList(){
    return axios({
        url:`http://www.mei.com/appapi/cms/cmsDetail/v3?silo=2013000100000000002&ids=2121000100000000234&timestamp=1547015888214&summary=d4da104029568eb0f91d4848321d58eb&platform_code=H5`
    }).then(res=>{
        //console.log(res.data.resultList)
        return res.data.resultList
    })
}

function getBanner(){
    return axios({
        url:`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000002&platform_code=PLATEFORM_H5`
    }).then(res=>{
        
        return res.data.banners
    })
}
export {getList,getBanner}
