import React,{Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom"

class Footer extends Component{

    render(){
        return <div>
            <footer>
               <p className="header_p1">400 - 664 - 6698</p>
               <ul>
                   <li><NavLink to="/silo/index2"  replace>首页</NavLink></li>
                   <li><NavLink to="/silo/index2"  replace>客户端</NavLink></li>
                   <li><NavLink to="/login/mobile"  replace>登录</NavLink></li>
                   <li><NavLink to="/login/mobile"  replace>注册</NavLink></li>
               </ul>
               <p className="header_p2">浙ICP备16004860号-1</p>
            </footer>
        </div>
    }
}

export default Footer;