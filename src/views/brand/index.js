import React,{Component} from "react"
import axios from 'axios'
import "./index.scss"
class Brand extends Component {
	render(){
		// console.log(this);
		return <div id="brand">
		
					<div>
						<img src={this.state.datalist.brandPageImage} alt=""/>
					</div>
					
			

		</div>
	}
	constructor(props){
		super(props)
		this.state = {
			datalist:[]
		}
	}
	// asios请求
    componentWillMount(){
		axios({
			url:`http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=3616200100000001567`
					
				}).then(res=>{
					console.log(res.data.body.brandDetail,999999);
					console.log(res.data.body.brandDetail.brandPageImage
						,8888888888888);
					console.log(this.props,777777);
					this.setState({
						datalist:res.data.body.brandDetail
					})
					
				
			})
  }//componentWillMountimport 
}

export default Brand