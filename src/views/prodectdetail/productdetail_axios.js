import axios from "axios";
    function aaa(){
        return axios({
            url:"http://www.mei.com/appapi/product/detail/v3?categoryId=2041204190000005269&productId=2042204299000798741&userId=2022202299900101332&platform_code=H5&timestamp=1547085993959&summary=8cf0839f241fbeaba8467685ee0ae589"
        }).then(res=>{
            return res.data.infos
            
            })
        
    }
export  {aaa}
