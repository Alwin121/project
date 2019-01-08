import React,{Component} from "react"

class Silo extends Component {
	render(){
		console.log(this);
		return <div>
			Silo
			{this.props.children}
		</div>
	}
}

export default Silo