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
			totalPrice:0,
			checkedAll:false,
			shoppingcarlist:[
				{	
					id:1,
					name:"黑马",
					price:"￥4469",
					number:1,
					url:"https://cdn15.mei.com/product/GVC-245-00011/GVC-245-00011a.jpg@182w_242h_2e_65q",
					description:"黑马纹棒球领皮外套",
					checked:false
				},
				{	
					id:2,
					name:"长靴",
					price:"￥2680",
					number:1,
					url:"https://cdn15.mei.com/product/PL5-409-00189/PL5-409-00189a.jpg@225w_300h_2e_100q",
					description:"灰黑色拼接女士长靴",
					checked:false
				}
			]
		}
	}

	componentDidMount(){
		axios({
			url:"/shopcars/check",
			method:""
		})
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
								{console.log(list)}
								return (
									<li key={list.name}>
									
										<label >
										<input type="checkbox" checked={list.checked} 
										onChange={(e)=>this.handleClick(index,e)}/></label>
										<img src={list.url}/>
										<div className="products_right">
											<p>{list.name}</p>
											<p>
												
												<button onClick={this.handleAddClick.bind(this,index)}>+</button>
												<span>{list.number}</span>
												<button onClick={this.handleSubClick.bind(this,index)}>-</button>
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
							<label><input type="checkbox" ref="quanxuan" onChange={(e)=>{this.onAllClick(e)}}/>全选</label>
							<p>总金额:</p>
						</div>
					</ul>
				:<div className="shoppingcar_div_box" >
					<p className="shoppingcar_first_p">购物袋是空的哦~</p>
					<p className="shoppingcar_two_p"><NavLink to="/silo/index2" >去抢购</NavLink></p>
					<h3 className="shoppingcar_h3">
						<span>为你推荐</span>
					</h3>
					<ul className="shoppingcar_ul" >
						{this.state.datalist.map(item=>{
							return (
								<li key={item.productId} onClick={this.handleClickdel.bind(this,item.productId)}>
									<img src={item.imageUrl}/>
									<p className="shoppingcar_introduce">{item.productName}</p>
							</li>)
						}
							)}
					</ul>
				</div>
				} 
				
		</div>
	}

	handleClickdel(id){
			this.props.history.push(`/prodectdetail/${id}`);
		  }


	handleAddClick(index){

		var list = [...this.state.shoppingcarlist]
		console.log(this)
		list[index].number++
		this.setState({
			shoppingcarlist:list
		})
		
		
	}

	handleSubClick(index,number){
		
		var list2 = [...this.state.shoppingcarlist]
		list2[index].number--
		if(list2[index].number<0){
			list2[index].number=0
		}
		this.setState({
			shoppingcarlist:list2
		}) 
	}

	onAllClick(e){
		console.log(e);
		if(e.target.checked==true){
            this.setState({
                shoppingcarlist:this.state.shoppingcarlist.map((ele,index)=>{
					console.log(ele)
                    ele.checked=true
                    return ele
                })
            })
 
        }else if(e.target.checked==false){
			console.log(e.target.checked);
            this.setState({
			
                shoppingcarlist:this.state.shoppingcarlist.map((ele,index)=>{
					ele.checked=false
                    return ele
                })
            })
		}
		
		// this.SumPrice()

	}
	
	// SumPrice=(ele)=>{
    //     var sum=0
    //     this.state.shoppingcarlist.forEach((ele,index)=>{
	// 		sum+=ele.number*ele.price
	// 		this.refs.all.totalPrice = sum
    //     })
    //     this.setState({
	// 		totalPrice:sum			
    //     })
	// }
	

	handleClick(i,e){
		var ccc=this.state.shoppingcarlist.map((ele,index)=>{
				
			if(index==i){
				console.log(ele.checked)
				ele.checked=e.target.checked
				return ele
			}else {
				return ele
			}
		})
				this.setState({
					shoppingcarlist:ccc
				})
			
		
	}



	handleDelClick(index){
	
		var mylist = [...this.state.shoppingcarlist]
		mylist.splice(index,1)
		this.setState({
			shoppingcarlist:mylist
		})
	}
	componentDidUpdate(){
       
        var bool=this.state.shoppingcarlist.every((ele,index)=>{
			console.log(ele)
            if(ele.checked==true){
                return true
            }else {
                return false
            }
        })
		
        // if(bool==true){
        //     this.refs.quanxuan.checked=true
        // }else {
        //     this.refs.quanxuan.checked=false
        // }
    }
	
	
}



export default Shoppingcar