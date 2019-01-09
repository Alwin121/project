import React,{Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom"

class Header extends Component{
    render(){
        return <div>
            <div className="login_div">
                <ul className="login_ul">
                    <li><NavLink to="/login/mobile"  replace>登录</NavLink></li>
                    <li><NavLink to="/silo/index2"  replace>
                        <input type="text"/>
                        <i class="iconfont icon-search"></i>
                    </NavLink></li>
                    <li><NavLink to="/shoppingcar"  replace>
                    <i class="iconfont icon-gifts"></i>
                    </NavLink></li>
                </ul>
            </div>
        </div>
    }
}

export default Header;