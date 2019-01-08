import React,{Component} from "react"
import { PullToRefresh, Button } from 'antd-mobile';

class Demo extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		refreshing: false,
		down: true,
		height: document.documentElement.clientHeight,
		data: [],
	  };
	}
  
	componentDidMount() {
	  const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
	  setTimeout(() => this.setState({
		height: hei,
		data: genData(),
	  }), 0);
	}
  
	render() {
	  return (<div>
		<PullToRefresh
		  damping={60}
		  ref={el => this.ptr = el}
		  style={{
			height: this.state.height,
			overflow: 'auto',
		  }}
		  indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
		  direction={'up'}
		  refreshing={this.state.refreshing}
		  onRefresh={() => {
			this.setState({ refreshing: true });
			setTimeout(() => {
			  this.setState({ refreshing: false });
			}, 1000);
		  }}
		>
		  {this.state.data.map(i => (
			<div key={i} style={{ textAlign: 'center', padding: 20 }}>
			  {this.state.down ? 'pull down' : 'pull up'} {i}
			</div>
		  ))}
		</PullToRefresh>
	  </div>);
	}
  }


export default Demo
