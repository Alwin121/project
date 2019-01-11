import React,{Component} from "react"
import {getBanner} from '../../model'
import './index.scss'
import BannerInfo from '../bannerInfo'
import CategoryList from '../categoryList'
class BannerImg extends Component {
	constructor(props){
		super(props)

		this.state={
			bannerInfo:{}
		}
	}
	render(){
		return <div className="women_bannerImg" onClick={this.handleClick.bind(this,this.state.bannerInfo.link_url)}>
				<img src={this.state.bannerInfo.main_image} alt=""/>
				<BannerInfo></BannerInfo>
				<CategoryList></CategoryList>
		</div>
	}
	handleClick(id) {
		console.log(id)
		id = id.split('/')[4]
		console.log(id)
		console.log(this.props)
		this.props.history.push(`/brand/${id}`)
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

export default BannerImg