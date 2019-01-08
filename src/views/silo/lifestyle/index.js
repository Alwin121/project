import React,{Component} from "react"
import {getSwiper} from "./model"

class Lifestyle extends Component {
	render(){
		// console.log(this);
		return <div>
			lifestyle
		</div>
	}//render
	componentWillMount(){

		getSwiper().then(res=>{
			console.log(res)
		})//then	
	}//componentWillMount
}//Lifestyle

export default Lifestyle