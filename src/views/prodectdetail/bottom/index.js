import React,{Component} from "react"
import './index.scss'
class Bottom extends Component {
	render(){
		console.log(this);
		return <div>
			<ul className='product_bottom_ul'>
				<li className='product_bottom_li'><i className="product_bottom_icon iconfont icon-cart"></i></li>
				<li className='product_bottom_li'>加入购物车</li>
				<li className='product_bottom_li'>立即购买</li>
			</ul>
		</div>
	}
}

export default Bottom