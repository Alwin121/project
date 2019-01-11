import React,{Component} from "react"
import {getBanner,getList} from './model'
import './index.scss'
import Demo from './components/Demo'

class Men extends Component {
	constructor(props){
		super(props)

		this.state={
			bannerInfo:{},
			ListInfo:[]
		}
	}

	render(){
		return <div className="men">
			<div className="men_banner">
				<div className="men_bannerImg" >				
					<img src={this.state.bannerInfo.main_image} alt=""/>	 
				</div>
				<div className="men_bannerInfo">
					<strong className="men_infoTitle">{this.state.bannerInfo.main_title}</strong>
           			<span className="men_infoSub">{this.state.bannerInfo.sub_title}</span>
           			<span className="men_infoSub">{this.state.bannerInfo.description}</span>
				</div>
				<div className="men_banner_list">
					<ul className="men_banner_list_Big">
                		{
                    		this.state.ListInfo.map((item)=>
                        	<li className="men_banner_list_mes" key={item.categoryTwoId}><img src={item.categoryImgStr} alt=""/></li>
                        	)
                		}
            		</ul>
				</div>
				
			</div>
			<Demo {...this.props}></Demo>
		</div>
	}

	// handleClick(id) {
	// 	console.log(id)
	// 	id = id.split('/')[4]
	// 	console.log(id)
	// 	console.log(this.props)
	// 	this.props.history.push(`/brand/${id}`)
	// }

	componentDidMount(){
		getBanner().then(res=>{
			this.setState({
				bannerInfo:res[0]
			})
			console.log(res[0])
		})

		getList().then(res=>{
			this.setState({
				ListInfo:res[0].data
			})
			console.log(res[0].data)
		})
	}
}

export default Men