import React,{Component} from "react"
import {getBanner,getList} from './model'
import './index.scss'
import Demo from './components/Demo'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import Header from "../../../components/header"
import {NavLink} from 'react-router-dom'

class Men extends Component {
	constructor(props){
		super(props)

		this.state={
			bannerInfo:[],
			ListInfo:[]
		}
	}
	render(){
		return <div className="men">
			<Header></Header>	
			<div className="men_banner">
				{
					this.state.bannerInfo.length===0?null:
					<ReactSwipe
						className="carousel"
						swipeOptions={{ continuous: true,auto:1000 }}
						>
						{
							this.state.bannerInfo.map((item)=>
								<div key={item.id}>
									<div className="men_bannerImg" onClick={this.handleClick.bind(this,item.link_url)}>
										<img src={item.main_image} alt=""/>
									</div>
									<div className="kid_bannerInfo">
										<strong>{item.main_title}</strong>
										<span>{item.sub_title}</span>
										<span>{item.description}</span>
									</div>
								</div>
							)
						}
					</ReactSwipe>
				}
				<div className="men_bannerImg">				
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

	handleClick(id) {
		console.log(id)
		id = id.split('/')[4]
		console.log(id)
		this.props.history.push(`/brand/${id}`)
	}

	componentDidMount(){
		getBanner().then(res=>{
			this.setState({
				bannerInfo:res
			})
			console.log(res)
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