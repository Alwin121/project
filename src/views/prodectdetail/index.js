import React,{Component} from "react"
import Top from '../../components/top'
import axios from "axios";
import ReactSwipe from 'react-swipe'
import Drawer from './drawer'
import store from '../../store'
import './index.scss'
class Prodectdetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  imgArr:[],
		  data:null,
		  pricedata:null,
		  isShow:false
		};
	  }
	componentDidMount(){
		axios({
			url:"http://www.mei.com/appapi/product/detail/v3?categoryId=2041204190000005269&productId=2042204299000798741&userId=2022202299900101332&platform_code=H5&timestamp=1547085993959&summary=8cf0839f241fbeaba8467685ee0ae589"
		}).then(res=>{
			console.log(res.data.infos)
			this.setState({
				imgArr:res.data.infos.images,
				data:res.data.infos
			})
		})
		axios({
			url:'http://www.mei.com/appapi/product/getProductPrice/v3?productId=2042204299000798741&userLevel=2&type=0'

		}).then(res=>{
			console.log(res.data.retDto)
			this.setState({
				pricedata:res.data.retDto
			})
		})
	
	}
	render(){
		
		return <div className="productdetail">
		
			<Top {...this.props}></Top>
			<ReactSwipe
				className="carousel productdetai_swip"
				key={this.state.imgArr.length}
				swipeOptions={{ 
					continuous: true,
					auto: 3000
				}}
				>
					{this.state.imgArr.map(item=>
						
					<img className="productdetail_img" src={item.bigImgUrl}/>
						
						)
						}
					
					
			</ReactSwipe>
			{
				this.state.data&&this.state.pricedata?
				<div className="productdetail_div">
				<p className="productdetail_p1">{this.state.data.name}</p>
				<s className="productdetail_s">￥{this.state.pricedata.marketPrice}</s>
				<strong className="productdetail_strong">￥{this.state.pricedata.price}</strong>
				<span className="productdetail_span">{this.state.pricedata.discount}折</span>
				<span className="productdetail_span">买手推荐</span>
				<p className="productdetail_p2"><i class="productdetail_icon iconfont icon-clock"></i>{this.state.data.deliver_date}</p>
				<div className="productdetail_sg"><span>闪购</span>距结束还有NaN小时</div>
				<div className="productdetail_sg "><span>领券</span><span className="productdetail_red" >满999减150</span><span onClick={this.myclick1.bind(this)}  className='productdetail_node'></span></div>
				<div className="productdetail_sg"><span>服务</span><span className='productdetail_node' ></span>{
					this.state.data.service_labels.map(items=>
						<span className='productdetail_server'>{items.label_title}</span>
						)
				}
				
				</div>
				<Drawer></Drawer>
				{/* <Drawer isSHow={this.state.isShow?true:false}></Drawer> */}
				</div>
				:null
			}
			
		</div>
		
	}
	myclick1(){
		console.log('aaa')
		store.dispatch({
			type:'isShow',
			payload:true
		})
	}
}

export default Prodectdetail