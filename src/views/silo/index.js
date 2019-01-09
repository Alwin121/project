import React,{Component} from "react"


class Silo extends Component {
	render(){
		return <div>
			
			{this.props.children}
		</div>
	}
}

export default Silo