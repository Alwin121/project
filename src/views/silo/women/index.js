import React,{Component} from "react"
import BannerImg from './components/bannerImg'
import Demo from './components/Demo'
import './index.scss'

class Women extends Component {
	render(){
		return <div className="women clearfix">
			<BannerImg/>
			<Demo></Demo>
			
		</div>
	}
}

export default Women