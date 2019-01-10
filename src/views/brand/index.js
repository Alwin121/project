import React,{Component} from "react"
import axios from 'axios'
import "./index.scss"
import Null from "./null"
import Seleced from "./selected";
class Brand extends Component {
	render(){
		// console.log(this);
		return <div id="brand">
		
					<div className="pic">
						<img src={this.state.datalist.brandPageImage} alt=""/>
						<h1>{this.state.datalist.brandName}</h1>
		
					<div>
						+关注
					</div>
					
					</div>
					<div className="text">
					      
                         <p className="story" >{this.state.datalist.brandStoryText}
						 </p>

                         <div className={this.state.isMove?"move":''}>
						 
							<div className="bg">
										<div onClick={this.handleClick.bind(this)}>
											<p className="more">{this.state.isMove?"更多":"取消"}</p>
										</div>
								<div>
									{
										this.state.isTure.length?
										<Seleced selece={this.state.looplist}></Seleced>
										:
										<Null></Null>
									}
									
								</div>
							</div>

						 </div>
						
					</div>
			

		</div>
	}
	constructor(props){
		super(props)
		this.state = {
			datalist:[],
			isMove:true,
			looplist:[],
			isTure:[]
			
		}
	}
	// asios请求
    componentWillMount(){
		// console.log(this.props)
		axios({
			url:`http://www.mei.com/appapi/brand/product/hotNew/v3?logoId=${this.props.match.params.id}`
					
				}).then(res=>{
					console.log(res.data.body.newProductTop10,9999990);
					this.setState({
						datalist:res.data.body.brandDetail,
						looplist:res.data.body,
						isTure:res.data.body.newProductTop10

					})
					
				console.log(this.state.looplist)
			})
  }//componentWillMountimport 
  handleClick(){
	 
	this.setState({
		isMove:!this.state.isMove
	})
  }
}

export default Brand