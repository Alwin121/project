import { PullToRefresh} from 'antd-mobile';
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
      url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=1&timestamp=1547023002364&summary=7d0ea942f4be045247afce3be9bcc718&platform_code=H5`
    }).then(res=>{
      console.log(res,1111111)
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
        direction={this.state.num >7? '' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={() => {
         
          this.setState({ refreshing: true });
          axios({
            url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=women&pageIndex=${this.state.num}&timestamp=1547023089418&summary=dc62ea56dbb0381fd445ca7b34fab300&platform_code=H5`
         }).then(res=>{
          console.log(res,22222222222222)
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
            <div className="contain_box" onClick={this.handleListClick.bind(this,i.categoryId)}> 
              <div className="imglist">
                <img className="heart" src={i.imageUrl} alt=""/>
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

  handleListClick(id){
    console.log(id)
    this.props.history.push(`/productlist/${id}`)
  }
}

export default Demo