import React,{Component} from "react";
import "./index.scss";
import {NavLink} from "react-router-dom"
import axios from "axios"

class Header extends Component{
    constructor(props) {
        super(props);
        this.state={
            isShow:false,
            classN1:'login_div',
            classN2:'aaa',
            navlist:[]
        }
      }
      componentDidMount(){
        
        window.onscroll = this.onhandleScroll.bind(this) 
      }


      onhandleScroll(){
          //console.log(document.documentElement.scrollTop)
          if(document.documentElement.scrollTop>0){
                this.setState({
                    isShow:true
                })
          }else{
              this.setState({
                  isShow:false
              })
          }
      }

    render(){
        return <div>
            <div className={this.state.isShow?this.state.classN1 +' '+this.state.classN2:'login_div'}>
                <ul className="login_ul">
                    <li><NavLink to="/login/mobile" >登录</NavLink></li>
                    <li>
                        <a>
                            <strong>
                                <span>
                                <i className="iconfont icon-search"></i>
                                </span>
                                CHIARA FERRAGNI 全场3折起
                            </strong>
                        </a>
                        
                    </li>
                    <li><NavLink to="/shoppingcar">
                    <i className="iconfont icon-gifts"></i>
                    </NavLink></li>
                </ul>
                <ul className="nav_ul">
                    <li><NavLink to="/silo/index2" activeClassName="active" >推荐</NavLink></li>
                    <li><NavLink to="/silo/crossborder" activeClassName="active">海外</NavLink></li>
                    <li><NavLink to="/silo/women" activeClassName="active">女士</NavLink></li>
                    <li><NavLink to="/silo/men" activeClassName="active">男士</NavLink></li>
                    <li><NavLink to="/silo/cosmetics" activeClassName="active">美妆</NavLink></li>
                    <li><NavLink to="/silo/lifestyle" activeClassName="active">家居</NavLink></li>
                    <li><NavLink to="/silo/kids" activeClassName="active">婴童</NavLink></li>
                    <li><NavLink to="/upcoming" activeClassName="active">即将上新</NavLink></li>
                </ul>
            </div>
        </div>
    }
}

export default Header;