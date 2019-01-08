import React,{Component} from "react"
import BannerImg from './components/bannerImg'
import List from './components/List'

class Women extends Component {
	render(){
		return <div className="women clearfix">
			<BannerImg/>
			<List></List>
			
		</div>
	}
}

export default Women