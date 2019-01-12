import React,{Component} from "react"
import Headers from "./header"
import List from "./list"
class Personalcenter extends Component {
	render(){
		// console.log(this);
		return <div id="Personalcenter1">
			<Headers {...this.props}></Headers>
			<List {...this.props}></List>
			
		</div>
	}
}

export default Personalcenter