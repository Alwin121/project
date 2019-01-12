import React,{Component} from "react"
import { PullToRefresh, Button } from 'antd-mobile';
import ReactDOM from "react-dom";
import axios from 'axios'
import './index.scss'
import Footer from '../../../components/footer'
class Demo extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		refreshing: false,
		down: true,
		height: document.documentElement.clientHeight,
		data: [],
		num:1,
		banners:""
	  };
	}

	componentDidMount() {
	axios({
		url:'http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5&credential=rO0ABXNyACdjb20ucmF5b28uY29tbW9uLnBvam8uVXNlckNyZWRlbnRpYWxzVm8AAAAAAAAAAQIAA0wACHBhc3N3b3JkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAJdXNlckVtYWlscQB%2BAAFMAAZ1c2VySWRxAH4AAXhwdABAZmU4ZjFkY2E2OTI3NDI1ZWM0Mzc5NzE4NDRjNmIwNjQ4ZGFkODMzNWYwODI2ZDYzMDgzYWZiZGI0ZWZhM2Q3YnQACzE4MjMzNzE4NzIzdAATMjAyMjIwMjI5OTkwMDEwMTMzMg%3D%3D'
	}).then(res=>{
		// console.log(res.data.banners[0].main_image,111)
		this.setState({
			banners:res.data.banners[0].main_image
		})
	})
		
	  const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
	  axios({
		url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=1&timestamp=1546931942480&summary=94e85feb17f0f5d33088aad1ca1a4040&platform_code=H5`

	}).then(res=>{
		console.log(res.data.eventList);
		
		this.setState({ refreshing: false,
			height: hei,
			data: res.data.eventList,
			num:this.state.num+1
		 })
		// return res.data.data.films;
		
})
	}
  
	render() {
	  return (<div className="crossborder">

		  
	   {/* <Button
		  style={{ marginBottom: 15 }}
		  onClick={() => this.setState({ a: !this.state.down })}
		>
		  direction: {this.state.down ? 'down' : 'up'}
		</Button>*/}
		<PullToRefresh
		  damping={60}
		  ref={el => this.ptr = el}
		  style={{
			height: this.state.height,
			overflow: 'auto',
		  }}
		  indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
		  direction={this.state.num<=4?'up':'down'}
		  refreshing={this.state.refreshing}
		  onRefresh={() => {
			this.setState({ refreshing: true });
			axios({
				url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=crossborder&pageIndex=${this.state.num}&timestamp=1546933504459&summary=9f489bb43ea2f14b03a1815763bd8c52&platform_code=H5`

			}).then(res=>{
				console.log(res.data);
				this.setState({ refreshing: false,
					data:[...this.state.data,...res.data.eventList],
					num:this.state.num+1
				 });

				
		})
		  }}
		>
		<img className="crossborder_bigimg" src={this.state.banners}/>
		  {this.state.data.map(i => (
			<div className="crossborder_div" key={i.categoryId}>
			<img onClick={this.rout.bind(this,i)} className="crossborder_img"  src={i.imageUrl} style={{ textAlign: 'center', padding: 20 }}/>
			<ul onClick={this.rout.bind(this,i)}  className="crossborder_ul">
				<li className="crossborder_li1">海外直发</li>
				<li className="crossborder_li2">{i.englishName}</li>
				<li className="crossborder_li3">{i.chineseName}</li>
				<li className="crossborder_li4">{i.discountText}</li>
			</ul>
			</div>
			))}
				<Footer></Footer>
		</PullToRefresh>
			
	  </div>);
	}
	rout(i){
			this.props.history.push(`/productlist/${i.categoryId}`)
	}
  }


export default Demo
