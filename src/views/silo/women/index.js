import React,{Component} from "react"
import BannerImg from './components/bannerImg'
import Demo from './components/Demo'
import './index.scss'
import Header from "../../../components/header"

class Women extends Component {
	render(){
		return <div className="women clearfix">
			<Header></Header>
			<BannerImg {...this.props}/>
			<Demo {...this.props}></Demo>
			
		</div>
	}
	componentDidMount(){
		console.log(this.props)
	}
}

export default Women