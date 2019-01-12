import React,{Component} from "react"
import "./index.scss"
import axios from "axios"
import {NavLink} from "react-router-dom"
class List extends Component {
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
                                    <h1>1111</h1>
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
                        <li>退出登录<span></span></li>
                    </ul>
        </div>
			
		</div>
    }
    // componentDidMount(){
    //     axios({
    //         url:"/users/checkUser",
    //         method:"post",
    //         data: {
    //             username:
    //           }
			
	// 	}).then(res=>{
	// 		console.log(res,999999);
		
	// })

    // }
}

export default List