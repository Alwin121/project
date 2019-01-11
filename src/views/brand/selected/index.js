import React,{Component} from "react"
import "./index.scss"

import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

class Seleced extends Component {
	render(){
		//t console.log(this);
		return <div id="brand_null">
		<h1 className="new">精选上新</h1>
		{
			this.state.datalist.length?
			
			<div className="swiper-container a">
			<div className="swiper-wrapper">
			
			
			{
				this.state.datalist.map(item=>
					<div className="swiper-slide" key={item.eventId}>
					<div className="file">
						<img src={item.fileUrl} alt=""/>
						<p>￥{item.price}<s><span>￥{item.marketPrice}</span></s></p>
					</div>
					 
					</div>
					)
			}
		</div>
		</div>:
		null

		}



		 
		</div>
	}
	constructor(props){
		super(props)
		this.state = {
			datalist:[],
			looplist:[]
		}
	}
	componentDidMount(){
		console.log(this.props.selece)
		this.setState({
			datalist:this.props.selece,
			
		},function(){
			var mySwiper  = new Swiper('.a', {
				slidesPerView: 3,
				spaceBetween: 30,
				pagination: {
				  el: '.swiper-pagination',
				  clickable: true,
				},
			  });
		})

	}
	
}

export default Seleced
