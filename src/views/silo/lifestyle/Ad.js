import React,{Component} from "react"
import {getAd} from "./model"
import ReactDOM from 'react-dom'
import { PullToRefresh, ListView, Button } from 'antd-mobile';

class Ad extends Component {

	render(){
		// console.log(this);
		return <div id="ad">
        {
            this.state.datalist.map(item=>
            <ul>
                <li>
                    <p>{item.englishName}</p>
                    <p>{item.chineseName}</p>
                    <p>{item.discountText}</p>
                </li>
                <img src={item.imageUrl}/>
            </ul>
                )
        }
			
		</div>
    }
    constructor(props){
        super(props)
        this.state = {
            datalist:[],
            cur:1
        }
    }
    //asios请求

    componentWillMount(){

		getAd(this.state.cur).then(res=>{
      console.log(res,9)
      this.setState({
        datalist:res

      })
		})//then	
	}//componentWillMountimport 
}

export default Ad