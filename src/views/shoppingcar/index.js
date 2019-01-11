import React,{Component} from "react"
import axios from "axios"
import "./index.scss"
import {NavLink} from "react-router-dom"

// import Top from "../../components/top"
class Shoppingcar extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			datalist:[],
			allChecked:false,
			check:[],
			shoppingcarlist:[
				{	
					id:1,
					name:"黑马",
					price:"￥4469",
					number:1,
					url:"https://cdn15.mei.com/product/GVC-245-00011/GVC-245-00011a.jpg@182w_242h_2e_65q",
					description:"黑马纹棒球领皮外套",
					isCheck:false
				},
				{	
					id:2,
					name:"长靴",
					price:"￥2680",
					number:1,
					url:"https://cdn15.mei.com/product/PL5-409-00189/PL5-409-00189a.jpg@225w_300h_2e_100q",
					description:"灰黑色拼接女士长靴",
					isCheck:false
				}
			]
		}
	}

	componentDidMount(){
		axios({
			url:"http://www.mei.com/appapi/product/maybeLike/v3?pageIndex=1"
		}).then(res=>{
			// console.log(res.data.products)
			
			this.setState({
				datalist:res.data.products
				
			})
		})	
		
	}
	render(){
		
		return <div>
			{
				this.state.shoppingcarlist.length?
					<ul className="products_ul">
						{
							this.state.shoppingcarlist.map((list,index)=>{
								return (
									<li key={list.name}>
										<label onClick={this.handleClick.bind(this)}><input type="checkbox" /></label>
										<img src={list.url}/>
										<div className="products_right">
											<p>{list.name}</p>
											<p>
												<button onClick={this.handleAddClick.bind(this,index)}>+</button>
												<span>{list.number}</span>
												<button>-</button>
											</p>
											<p>{list.description}</p>
											<p>{list.price}</p>
										</div>
										<button className="products_delete" onClick={this.handleDelClick.bind(this,index)} >删除</button>
									</li>
								)
							})
						}
						<div className="products_all">
							<label><input type="checkbox"  onClick={this.onAllClick.bind(this)} />全选</label>
							<p>总金额:</p>
						</div>
					</ul>
				:<div className="shoppingcar_div_box">
					<p className="shoppingcar_first_p">购物袋是空的哦~</p>
					<p className="shoppingcar_two_p"><NavLink to="/silo/index2" >去抢购</NavLink></p>
					<h3 className="shoppingcar_h3">
						<span>为你推荐</span>
					</h3>
					<ul className="shoppingcar_ul">
						{this.state.datalist.map(item=>{
							return (
								<li key={item.productId}><img src={item.imageUrl} />
									<p className="shoppingcar_introduce">{item.productName}</p>
							</li>)
						}
							)}
					</ul>
				</div>
				} 
				
		</div>
	}

	handleAddClick(index){

		var list = [...this.state.shoppingcarlist]
		console.log(this)
		list[index].number++
		this.setState({
			shoppingcarlist:list
		})
		// console.log(this.refs.sss1.innerHTML)
		// var aaa = parseInt(this.refs.sss1.innerHTML)
		// console.log(aaa,222)
		// this.refs.sss1.innerHTML=aaa+1
		// this.setState({
		// 	shoppingcarlist.number:aaa
		// })
		
	}

	// onAllClick(){
	// 	this.setState({
	// 		allChecked:!this.state.allChecked
	// 	})
	// }
	handleClick(index){
		
		if(this.state.check.length === this.state.shoppingcarlist.length){
			this.setState({
				allChecked:true
			})
			// console.log(this.state.allChecked)
		}else{
			this.setState({
				allChecked:false
			})
			console.log(this.state.allChecked)
		}
	
	}

	onAllClick(){
		if(this.state.allChecked === true){
			this.setState({
				check:this.state.shoppingcarlist
			})
		}else{
			this.setState({
				check:[]
			})
		}
	}

	handleDelClick(index){
	
		var mylist = [...this.state.shoppingcarlist]
		mylist.splice(index,1)
		this.setState({
			shoppingcarlist:mylist
		})
	}

	
}

export default Shoppingcar