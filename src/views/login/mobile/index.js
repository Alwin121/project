import React,{Component} from "react"
import './index.scss'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class Mobile extends Component {
	render(){
		return <div className="login_item">
			<div className="login_form clearfix">
				<div className="input_box">
			    	<div className="warn" ref="userwarn"></div>
					<input type="text" name="usename" placeholder="手机号/邮箱" ref="username" className="username" onChange={this.handleChange.bind(this)}/>
					<input type="password" name="password" placeholder="密码" ref="password" className="password"/>
				</div>

				<div className="action" >
					<div className="submit" >
						<div className="default" onClick={this.handleSubClick.bind(this)}>
							<div className="shade"></div>
							<span>提交</span>
						</div>
					</div>
					<div className="login_way">已有账号？<NavLink to="/login/account" className="red_text">点此登录</NavLink></div>
				</div>
			</div>
			
		</div>
	}

	handleSubClick(){
		axios({
			url:`/users/register`,
			method:'post',
			data:{
				username:this.refs.username.value,
				password:this.refs.password.value
			}
			}).then(res=>{
				if(res.data.ok === 1) {
					console.log('----注册成功')
					this.props.history.push('/login/account')
				} else {
					console.log('----注册失败')
				}
		})
	}

	handleChange(){
		console.log(this.refs);
		axios({
			url:`/users/checkUser`,
			method:'post',
			data:{
				username:this.refs.username.value
			}
		}).then(res=>{
			if(res.data.ok === 0) {
				console.log('----用户名可用')
				this.refs.userwarn.innerHTML = ''
			} else {
				console.log('----用户名被注册')
				this.refs.userwarn.innerHTML = '---用户名被注册---'
			}
		})
	}
}


export default Mobile