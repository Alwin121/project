import React,{Component} from "react"
import Top from '../../components/top'
import axios from "axios";
class Prodectdetail extends Component {
	componentDidMount(){
		axios({
			url:"http://www.mei.com/appapi/product/detail/v3?categoryId=2041204190000005269&productId=2042204299000798741&userId=2022202299900101332&platform_code=H5&timestamp=1547085993959&summary=8cf0839f241fbeaba8467685ee0ae589"
		}).then(res=>
			console.log(res.data.infos)
			)
	}
	render(){
		
		return <div>
			<Top {...this.props}></Top>
			Prodectdetail
		</div>
	}
}

export default Prodectdetail