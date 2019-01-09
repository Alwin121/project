import React,{Component} from "react"
import "./index.scss"
import {NavLink} from "react-router-dom"
class List extends Component {
	render(){
		console.log(this);
		return <div id="personalcenter_list">
        <div className="up">
                <ul>
                    <li>
                        
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
                        <li><NavLink to="#" activeClassName="active" replace>魅力社</NavLink></li>
                        <li><NavLink to="#" activeClassName="active" replace>我的优惠券</NavLink></li>
                        <li><NavLink to="/film" activeClassName="active" replace>我的地址</NavLink></li>
                        <li>联系我们</li>
                        <li>退出登录</li>
                    </ul>
        </div>
			
		</div>
	}
}

export default List