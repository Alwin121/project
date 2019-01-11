import React,{Component} from "react"
import { Drawer, List} from 'antd-mobile'
import store from '../../../store'
class App1 extends Component {
	state = {
	  open: false
	}
	componentDidMount(){
		console.log("bbbb",this.props)
		store.subscribe(()=>{
			console.log()
			this.setState({
				open:store.getState().DrawerReducer
			})
		})
		
	}
	onOpenChange = (...args) => {
		console.log(args);
	
		this.setState({ open: !this.state.open });
		store.dispatch({
			type:'isHide',
			payload:false
		})
	}
	render() {
	  // fix in codepen
	  const sidebar = (<List>
		{['优惠券满99减10', '优惠券满200减50', '优惠券满300减99', '优惠券满400减120'].map((i, index) => {
		  if (index === 0) {
			return (<List.Item key={index}
				multipleLine
				
			><i class="iconfont icon-gifts"></i>点击优惠券</List.Item>);
		  }
		  return (<List.Item key={index} onClick={this.myclick.bind(this)}
		  ><i class="productdetail_red iconfont icon-gifts"></i>{i}</List.Item>);
		})}
	  </List>);
		
	  return (<div>
		{/* <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar> */}
		<Drawer
		  className="my-drawer"
		  style={{ minHeight: document.documentElement.clientHeight }}
		  position='bottom'
			enableDragHandle
			touch={false}
			dragToggleDistance={100}
		  contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
		  sidebar={sidebar}
		  open={this.state.open}
		  onOpenChange={this.onOpenChange}
		>
		  Click upper-left corner
		</Drawer>
	  </div>);
	}
	myclick(){
		alert('领取成功')
	}
  }
  

export default App1