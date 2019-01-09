import React from "react"
import ReactDOM from 'react-dom'
// import {getAd} from "./model"
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import axios from 'axios'
const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: 'McDonald\'s invites you',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: 'Eat the week',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
  ];
  const NUM_ROWS = 20;
  let pageIndex = 0;
  
  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
  }
  
  class Acc extends React.Component {
    constructor(props) {
      super(props);
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
  
      this.state = {
        dataSource,
        refreshing: true,
        isLoading: true,
        height: document.documentElement.clientHeight,
        useBodyScroll: false,
      };
    }
  
    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //     });
    //   }
    // }
  
    componentDidUpdate() {
      if (this.state.useBodyScroll) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  
    componentDidMount() {
      const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
      axios({
        url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=1&timestamp=1546944734379&summary=c885aaa8145c3653d841fe3b0fced752&platform_code=H5`,
        
    }).then(res=>{
        console.log(res.data.eventList,5);
        this.rData = genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(genData()),
          height: hei,
          refreshing: false,
          isLoading: false,
        });
        
})

    //   setTimeout(() => {
    //     this.rData = genData();
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(genData()),
    //       height: hei,
    //       refreshing: false,
    //       isLoading: false,
    //     });
    //   }, 1500);
    }
  
    onRefresh = () => {
    //   this.setState({ refreshing: true, isLoading: true });
    //   // simulate initial Ajax
    //   setTimeout(() => {
    //     this.rData = genData();
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //       refreshing: false,
    //       isLoading: false,
    //     });
    //   }, 600);
    };
  
    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      if (this.state.isLoading && !this.state.hasMore) {
        return;
      }
      console.log('reach end', event);
      this.setState({ isLoading: true });
      axios({
        url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=2&timestamp=1546944734379&summary=c885aaa8145c3653d841fe3b0fced752&platform_code=H5`,
        
    }).then(res=>{
        console.log(res.data.eventList,4);
        this.rData = [...this.rData, ...genData(++pageIndex)];
        this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
    })
    //   setTimeout(() => {
    //     this.rData = [...this.rData, ...genData(++pageIndex)];
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //       isLoading: false,
    //     });
    //   }, 1000);
    };
  
    render() {
      const separator = (sectionID, rowID) => (
        <div
          key={`${sectionID}-${rowID}`}
          style={{
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED',
          }}
        />
      );
      let index = data.length - 1;
      const row = (rowData, sectionID, rowID) => {
        if (index < 0) {
          index = data.length - 1;
        }
        const obj = data[index--];
        return (
          <div key={rowID}
            style={{
              padding: '0 15px',
              backgroundColor: 'white',
            }}
          >
            <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
              {obj.title}
            </div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
              <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.img} alt="" />
              <div style={{ display: 'inline-block' }}>
                <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '250px' }}>{obj.des}-{rowData}</div>
                <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
              </div>
            </div>
          </div>
        );
      };
      return (<div>
        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderHeader={() => <span>Pull to refresh</span>}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={this.state.useBodyScroll ? {} : {
            height: this.state.height,
            border: '1px solid #ddd',
            margin: '5px 0',
          }}
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>);
    }
  }
  export default Acc  