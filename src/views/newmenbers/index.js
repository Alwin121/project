import React,{Component} from "react"
import axios from "axios"
import "./index.scss"
import Top from "../../components/top"
class Newmenbers extends Component {
	constructor(props){
		super(props)
		this.state = {
			picture:"",
			contnet:""
		}
	}

	componentDidMount(){
		axios({
			url:"http://www.mei.com/appapi/home/newZoneHeadImg/v3"
		}).then(res=>{
			//console.log(res.data)
			this.setState({
				picture:res.data
			})
		})

		axios({
			url:"http://www.mei.com/appapi/mkt/newZoneCoupon?credential="
		}).then(res=>{
			console.log(res.data.des1)
			this.setState({
				contnet:res.data
			})
		})
	}
	render(){
		
		return <div>
			<Top {...this.props}/>
			<img src={this.state.picture.imgUrl} />
			<ul className="newmenbers_ul">
				<li>
					<i className="iconfont icon-mianfei"></i>
					<span>首单免邮</span>
				</li>
				<li>
					<i className="iconfont icon-tuihuo"></i>
					<span>7天无理由退换货</span>
				</li>
				<li>
					<i className="iconfont icon-zhengpinbaozheng"></i>
					<span>正品保障</span>
				</li>
			</ul>
			<div className="newmenbers_div_box">
				<div className="newmenbers_div_inside">
					<div className="newmenbers_one">￥{this.state.contnet.amount}</div>
					<div className="newmenbers_two">
						<p>new</p>
						<p>{this.state.contnet.des1}</p>
						<p>{this.state.contnet.des2}</p>
						<p>{this.state.contnet.beginTime}-{this.state.contnet.endTime}</p>
					</div>
				</div>
			</div>
			<div className="newmenbers_div_box_right">
				<span>领取优惠券</span>
			</div>
			<div className="circle"></div>
		</div>
	}
}

export default Newmenbers