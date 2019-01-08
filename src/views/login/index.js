import React,{Component} from "react"

class Login extends Component {
	render(){
		console.log(this);
		return <div>
			Login
			{this.props.children}
		</div>
	}
}

export default Login