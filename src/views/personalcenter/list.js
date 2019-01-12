import React,{Component} from "react"
import "./index.scss"
// import axios from "axios"
import {NavLink} from "react-router-dom"
class List extends Component {
   
    constructor(props){
        super(props)
        this.state = {
            username:null
        }
    }
    componentWillMount(){
        this.setState({
            username:document.cookie.split("=")[1]
        })
    }
	render(){
		console.log(this);
		return <div id="personalcenter_list">
        <div className="up">
            <ul>
                <li className="h1p">
                    <div>
                        <img src="#" alt=""/>
                    </div> 
                    <div>
                        <h1>{this.state.username}</h1>
                        <p>查看并编辑个人内容</p>
                    </div> 
                </li>
                <li>
                    <div>
                        <h1>0</h1>
                        <p>未支付订单</p>
                    </div>  
                    
                    <div>
                        <h1>0</h1>
                        <p>全部订单</p>
                    </div>  
                </li>
            </ul>
</div>  
        <div className="down">
                    <ul>
                        <li><NavLink to="/silo" activeClassName="active" replace>魅力社<span></span></NavLink></li>
                        <li><NavLink to="/silo" activeClassName="active" replace>我的优惠券<p>张优惠券</p>
                        <span></span></NavLink></li>
                        <li><NavLink to="/silo" activeClassName="active" replace>我的地址<span></span></NavLink></li>
                        <li>联系我们<span></span></li>
                        <li onClick={this.handleDeClick.bind(this)}>退出登录<span></span></li>
                    </ul>
        </div>
			
		</div>
    }
    handleDeClick(){
        // console.log(document.cookie,5656565656566)
        document.cookie=`username=${this.props.match.params.id}; expires=Thu, 18 Dec 2000 12:00:00 GMT; path=/`;
        console.log(document.cookie.split("=")[1],8989898777777777)
        this.props.history.push("/silo");
    

    }
    // componentDidMount(){
    //     axios({
    //         url:"/users/checkUser",
    //         method:"post",
    //         data: {
    //             username:""
    //           }
			
	// 	}).then(res=>{
	// 		console.log(res,999999);
		
	// })

    // }
}

export default List