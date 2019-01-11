import React,{Component} from "react"
import './index.scss'
import axios from 'axios'
import {connect} from "react-redux"
import Footer from "../../components/footer"
import Header from '../../components/header'
class Upcoming extends Component {

	componentDidMount(){
		// axios({
		// 	url:'http://www.mei.com/appapi/upcoming/index/v3?userId=2022202299900101332&platform_code=H5&timestamp=1547001479322&summary=a140bdfe3b4d46634033627f1d008d26'

		// }).then(res=>{
		// 	console.log(res.data.lists[0].events)
		// })
		if(this.props.lys.length===0){
			// this.props.getComingList();
			this.props.getComingList();
		}
	}
	render(){
		return <div className="upcoming_div">
			<Header></Header>
			<h1>距离开场还NaN个小时</h1>
			<p className="upcoming_p">订阅您喜欢的品牌，我们将在活动当天提醒您！</p>
			{
				this.props.lys.map(item=><div key={item.categoryId} >
					<img src={item.imagePcUrl}/>
					<ul className="upcoming_ul">
						<li className="upcoming_li">{item.englishName}</li>
						<li className="upcoming_li">{item.chineseName}</li>
						<li className="upcoming_li">{item.discount}<span className="upcoming_span">开售提醒</span></li>
					</ul>
					</div>
					)
			}
			<Footer></Footer>
		</div>
	}
}

export default connect((state)=>{
	return {
		lys:state.upComingReducer
	}
},
	{
		getComingList(){
		return	axios({
				url:'http://www.mei.com/appapi/upcoming/index/v3?userId=2022202299900101332&platform_code=H5&timestamp=1547001479322&summary=a140bdfe3b4d46634033627f1d008d26'
	
			}).then(res=>{
				console.log("发ajax",res.data.lists[0].events)
				return {
					type:"List",
					payload:res.data.lists[0].events
				}
			})
		}
	}
	)(Upcoming)