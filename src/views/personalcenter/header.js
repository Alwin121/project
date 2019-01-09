import React from "react"
import "./index.scss"
import { Popover, NavBar, Icon } from 'antd-mobile';
// import router from "react-dom"

const Item = Popover.Item;

// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Personalcenter extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (<div id="personalcenter">
		<div className="left" onClick={this.handleClick.bind(this,1)}>←</div>
      <NavBar
        mode="light"
        rightContent={
          <Popover mask="true"
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor'}}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="首页" data-seed="logId">首页</Item>),
              (<Item key="5" value="购物袋" style={{ whiteSpace: 'nowrap' }}>购物袋</Item>),
              (<Item key="6" value="个人中心">
                <span style={{ marginRight: 5,}}>个人中心</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >		  
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
     
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
	  
        个人中心

      </NavBar>
    </div>);
  }
  handleClick(id){
    //   console.log(this.props)

     this.props.history.go(-1)
  }
}
export default Personalcenter