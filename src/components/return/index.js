import React from "react"
import "./index.scss"
import { Popover, NavBar, Icon } from 'antd-mobile';
class Return extends React.Component {
render(){
    return <div id="return">
    <div className="fanhui">
        <ul>
            <li className="fanhui_1" onClick={this.handleReClick.bind(this)}>←</li>
            <li className="fanhui_2"></li>
            <li className="fanhui_3">···</li>
        </ul>
    </div>
    </div>
}
handleReClick(){
    this.props.history.go(-1)
}
}
export default Return

