import React,{Component} from "react"
import Header from "../../components/header"

class Silo extends Component {
	render(){
		return <div>
			<Header/>
			{this.props.children}
		</div>
	}
}

export default Silo