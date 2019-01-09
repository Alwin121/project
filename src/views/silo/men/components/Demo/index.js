import { PullToRefresh} from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
//import './index.scss'
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
      datalist:[],
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
      url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1547019724195&summary=4d4a08d2a282c569d1b4cddee1899c22&platform_code=H5`
    }).then(res=>{
      this.setState({
        datalist:res.data.eventList
      });
    })
  }

  render() {
    return (<div className='men_contain'>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.num? 'up' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
         
          this.setState({ refreshing: true });
          axios({
            url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=men&pageIndex=${this.state.num}&timestamp=1547019786011&summary=92735df2a78f46c17b3f92d9426b956c&platform_code=H5`
         }).then(res=>{
          this.setState({ 
            refreshing:false ,
            num:this.state.num+1,
            datalist:[...this.state.datalist,...res.data.eventList] 
            
          });
          console.log('aaa',res.data.eventList)
         })
        }}
      >
        {this.state.datalist.map(i => (
          <div style={{ textAlign: 'center', padding: 10 ,margin:4}} key={i.eventId}>
            <div className="contain_box" > 
              <div className="imglist">
                <img src={i.imageUrl} alt=""/>
                <div className="shade"></div>
              </div>
              <div className="listinfo">
                <div className="text">{i.englishName}</div>
                <div className="text">{i.chineseName}</div>
                <div className="text">{i.discountText}</div>
              </div>
            </div>
          </div>
        ))}
      </PullToRefresh>
    </div>);
  }
}

export default Demo