import React,{Component} from "react"
import {getheaderbar} from "../../model"
import "./index.scss"
class Categoryid extends Component {
	render(){
		// console.log(this);
		return <div id="categoryid">
		
	{
		this.state.datalist.map(item=>
		<ul className="categoryid_ul" onClick={this.handlelist.bind(this,item.productId
			)}>
			{/* <li><img src={item.ileUrl} alt=""/> </li> */}
			<li className="Categoryid_li"><img src={item.fileUrl} alt=""/></li>
			<li className="Categoryid_1">{item.brandName}</li>
			<li className="Categoryid_2">{item.productName}</li>
			<li className="Categoryid_3"><span>￥{item.price}</span><s>￥{item.marketPrice}</s></li>
		   
		</ul>

			)
	}
		

			
	

		</div>
	}
	constructor(props){
		super(props)
		this.state={
			datalist:[]
		}
	}
    componentDidMount(){

	// 	getheaderbar().then(res=>{
    //      console.log(res.body.categoryProducts,9090909090)
    //   this.setState({
    //     datalist:res.body.categoryProducts
    //     // logoId:this.state.datalist.splice()
    //   })
	// 	})//then
	// console.log(this.props,66666666666666)
	this.setState({
		datalist:this.props.name
	})	
	
  }//componentWillMountimport 
 	handlelist(id){
		// console.log("hahha")
		this.props.history.push(`/prodectdetail/${id}`);
	}
}

export default Categoryid