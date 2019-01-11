import React,{Component} from "react"
import "./index.scss"
class Categoryid extends Component {
	render(){
		// console.log(this);
		return <div id="categoryid">
		
	{
		this.state.datalist.map(item=>
		<ul className="categoryid_ul" onClick={this.handleClick.bind(this,item.productId)} key={item.productId}>
			{/* <li><img src={item.ileUrl} alt=""/> </li> */}
			<li className="Categoryid_li"><img src={item.imageUrl} alt=""/></li>
		
			<li className="Categoryid_1">{item.brandName}</li>
			<li className="Categoryid_2">{item.productName}</li>
			<li className="Categoryid_3"><span>￥{item.price}</span><s>￥{item.marketPrice}</s><p>{item.discount}折</p></li>
		   
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
	// console.log(this.props,66666666666666)
	this.setState({
		datalist:this.props.name
	})	
	
  }//componentWillMountimport 
  handleClick(id){
	//   console.log(this.props,35355353535535535353553535)
	this.props.history.push(`/prodectdetail/${id}`);
  }
}

export default Categoryid