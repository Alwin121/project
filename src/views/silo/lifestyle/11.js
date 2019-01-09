import React,{ Component } from 'react'
import ReactDOM from 'react-dom'    //下拉刷新组件依赖react-dom，所以需要将其引进来
import {getAd} from "./model"
import axios from "axios"
 import { PullToRefresh, ListView } from 'antd-mobile';
 
class ListContainer extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({  //这个dataSource有cloneWithRows方法
      rowHasChanged: (row1, row2) => row1 !== row2,
    });   
    
    this.pageNo = 0 //定义分页信息
    this.state = {
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
      hasMore: true
    };
  }
 
  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
 
  async componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
 
    this.rData = (await this.genData()).sceneryinfo;
    console.log(this.rData)
    this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(this.rData),
      height: hei,
      refreshing: false,
      isLoading: false,
    });
  }
  genData(){  //请求数据的方法
    this.pageNo++     //每次下拉的时候pageNo++                                                                                 
    return axios({
        url:`http://www.mei.com/appapi/silo/eventForH5?categoryId=lifestyle&pageIndex=${this.pageNo++}&timestamp=1546944734379&summary=c885aaa8145c3653d841fe3b0fced752&platform_code=H5`,
        
    })
            .then(function(result) {
                if(result){
                  return result
                }else{
                  this.setState({
                    hasMore: false
                  })
                }
            })
  }
 
  onRefresh = () => {
    // this.setState({ refreshing: true, isLoading: true });
    // // simulate initial Ajax
    // setTimeout(() => {
    //   this.rData = genData();
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     refreshing: false,
    //     isLoading: false,
    //   });
    // }, 600);
  };
 
  onEndReached = async (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }   //如果this.state.hasMore为false，说明没数据了，直接返回
    console.log('reach end', event);
    this.setState({ isLoading: true });
    this.rData = [...this.rData, ...((await this.genData()).sceneryinfo)];  //每次下拉之后将新数据装填过来
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.rData),
      isLoading: false,
    });
  };
 
  render() {
    //这里就是个渲染数据，rowData就是每次过来的那一批数据，已经自动给你遍历好了，rouID可以作为key值使用，直接渲染数据即可
    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowID} style={{"height":"100px"}}>{rowData.name}</div>
      );
    };
    return (
      <div>
        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={    //renderFooter就是下拉时候的loading效果，这里的内容可以自己随需求更改
            () => (
                  <div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                  </div>
                )
          }
          renderRow={row}   //渲染你上边写好的那个row
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
          pageSize={8}    //每次下拉之后显示的数据条数
        />
      </div>
    );
  }
}
 
export default ListContainer
