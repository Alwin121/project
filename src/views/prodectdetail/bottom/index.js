import React,{Component} from "react"
import './index.scss'
import axios from 'axios'
class Bottom extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  data:null
		};
	  }
	componentDidMount(){
		this.setState({
			data:this.props.detail
		})
	}
	render(){
		console.log(this);
		return <div>
			<ul className='product_bottom_ul'>
				<li onClick={this.shopcar.bind(this)} className='product_bottom_li'><i className="product_bottom_icon iconfont icon-cart"></i></li>
				<li onClick={this.addshop.bind(this)} className='product_bottom_li'>加入购物车</li>
				<li onClick={this.buy.bind(this)} className='product_bottom_li'>立即购买</li>
			</ul>
		</div>
	}
	shopcar(){
		this.props.history.push('/shoppingcar')
	}
	addshop(){
		if(document.cookie){
			axios({
				url:'/shopcars/addproduct',
				method:'post',
				data:{
					username:document.cookie.split('=')[1],
					productName:this.state.data.name,
					price:this.state.data.price,
					count:1,
					describle:this.state.data.brand_story,
					imgpath:this.state.data.images[0].smallImgUrl
				}
			}).then(res=>{
				alert('添加成功')
			})
		}else{
			this.props.history.push('/login/account')
		}
		
		
		
	}
	buy(){
		alert('该功能未实现')
	}
}

export default Bottom