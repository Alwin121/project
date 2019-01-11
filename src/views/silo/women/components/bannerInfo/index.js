import React,{Component} from "react"
import {getBanner} from '../../model'
import './index.scss'
class BannerInfo extends Component {
	constructor(props){
		super(props)

		this.state={
			bannerInfo:{}
		}
	}
	render(){
		return <div className="women_bannerInfo" >
           <strong>{this.state.bannerInfo.main_title}</strong>
           <span>{this.state.bannerInfo.sub_title}</span>
           <span>{this.state.bannerInfo.description}</span>
		</div>
	}

	componentDidMount(){
		getBanner().then(res=>{
			this.setState({
				bannerInfo:res[0]
			})
			console.log(res[0])
		})
	}

}

export default BannerInfo