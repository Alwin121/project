import { PullToRefresh, Button } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import './index.scss'
function genData() {
  const dataArr = [];
  for (let i = 0; i < 3; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
      data: [],
      num:2
    };
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei,
      data: genData(),
    }), 0);

    axios({
      url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1546999298960&summary=0bdd86f802c02db213374614a1dff540&platform_code=H5`
    }).then(res=>{
      this.setState({
        data:res.data.eventList
      });
    })
  }

  render() {
    return (<div className='list'>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.num ? 'up' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
         
          this.setState({ refreshing: true });
          axios({
            url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=${this.state.num}&timestamp=1546998481953&summary=32d33adff0060b827d3a81b1faf72b0f&platform_code=H5`
         }).then(res=>{
          this.setState({ 
            refreshing:false ,
            num:this.state.num+1,
            data:[...this.state.data,...res.data.eventList] 
            
          });
          console.log('aaa',res.data.eventList)
         })
        }}
      >
        {this.state.data.map(i => (
          <div style={{ textAlign: 'center', padding: 10 }} key={i.eventId}>
            <div className="list_box" > 
              <div className="imglist"><img src={i.imageUrl} alt=""/></div>
              <div className="listinfo">
                <div className="En">{i.englishName}</div>
                <div className="desc">{i.chineseName}</div>
                <div className="price">{i.discountText}</div>
              </div>
            </div>
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}

export default Demo