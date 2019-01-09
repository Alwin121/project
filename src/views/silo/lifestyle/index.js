
import Swiper from "./swiper";
import Hitarea from "./Hitarea";
import { PullToRefresh} from 'antd-mobile';
import React from "react"
import ReactDOM from 'react-dom'
import axios from 'axios'
import Footer from '../../../components/footer'
import './index.scss'
import {NavLink} from "react-router-dom"



function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      datalist:[],
      num:1
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    axios({
        url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1546944734379&summary=c885aaa8145c3653d841fe3b0fced752&platform_code=H5`,
        
    }).then(res=>{
        // console.log(res.data.eventList,3333);
        this.setState({
            height: hei,
            data: genData(),
            datalist:res.data.eventList,
			num:this.state.num+1
        })
      
    })
    // setTimeout(() => this.setState({
    //   height: hei,
    //   data: genData(),
    // }), 0);
  }

  render() {
    return (<div>
        
      {/* <Button
        style={{ marginBottom: 15 }}
        onClick={() => this.setState({ down: !this.state.down })}
      >
        direction: {"up"}
      </Button> */}
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.num<=3?'up':'down'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
            this.setState({ refreshing: true });
            axios({
                url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${this.state.num}&timestamp=1546944734379&summary=c885aaa8145c3653d841fe3b0fced752&platform_code=H5`,
                
            }).then(res=>{
                // console.log(res.data.eventList,39999999);
                this.setState({ refreshing: false,
                datalist:[...this.state.datalist,...res.data.eventList],
				num:this.state.num+1
                });
                
        })
        

        }}
      >
				<Swiper></Swiper>
     			<Hitarea></Hitarea>
       <div id="ad">
        {
            this.state.datalist.map(item=>
            <ul key={item.categoryId}>
                <li>
                    <p>{item.englishName}</p>
                    <p>{item.chineseName}</p>
                    <p>{item.discountText}</p>
                </li>
                <img src={item.imageUrl}/>
				
            </ul>
                )
        }
			{
				this.state.num>3?
<footer>
               <p className="header_p1">400 - 664 - 6698</p>
               <ul>
                   <li><NavLink to="/silo/index2">首页</NavLink></li>
                   <li><NavLink to="/silo/index2">客户端</NavLink></li>
                   <li><NavLink to="/login/mobile" >登录</NavLink></li>
                   <li><NavLink to="/login/mobile" >注册</NavLink></li>
               </ul>
               <p className="header_p2">浙ICP备16004860号-1</p>
            </footer>
            :
				null
			}
		</div>
      </PullToRefresh>
    </div>);
  }
}
export default Add  