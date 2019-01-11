import React,{Component} from "react"
import './index.scss'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class Mobile extends Component {
	constructor(props){
		super(props)

		this.state={
			isRegClick:true
		}
	}
	render(){
		return <div className="login_item">
			<div className="curr_title">欢迎登录</div>
			<div className="login_form clearfix">
				<div className="input_box">
			    	<div className="warn" ref="userwarn"></div>
					<input type="text" name="usename" placeholder="手机号/邮箱" ref="username" className="username" onBlur={this.handleChange.bind(this)}/>
					<input type="password" name="password" placeholder="密码" ref="password" className="password" />
				</div>

				<div className="action" >
					<div className="submit" >
						<div className="default" onClick={this.state.isRegClick?this.handleSubClick.bind(this):null} ref="sub_btn">
							<span>登录</span>
						</div>
					</div>
					<div className="login_way">还没有账号？<NavLink to="/login/mobile" className="red_text">点此注册</NavLink></div>
				</div>
			</div>
			
		</div>
	}	

	handleChange(){
		axios({
			url:`/users/checkUser`,
			method:'post',
			data:{
				username:this.refs.username.value
			}
		}).then(res=>{
			if(res.data.ok === 0) {

				this.refs.userwarn.innerHTML = '---用户未注册---'
				this.setState({
					isRegClick:false
				})
			} else {
				console.log('----用户名可登陆')
				this.refs.userwarn.innerHTML = ''
				this.setState({
					isRegClick:true
				})
			}
		})
	
	}

	handleSubClick(){
		axios({
			url:`/users/checkUser`,
			method:'post',
			data:{
				username: this.refs.username.value,
				password: this.refs.password.value
			}
		}).then(res=>{
			if(res.data.ok===1){
				this.props.history.push('/personalcenter')
			} else {
				alert('-----请输入自己的账号！-_-')
			}
		})
	}

	componentDidMount(){
		if(this.refs.username.value===null && this.refs.password.value===null){
			this.setState({
				isRegClick:false
			}) 
		}else{
			this.setState({
				isRegClick:true
			}) 
		}
	}
}



export default Mobile