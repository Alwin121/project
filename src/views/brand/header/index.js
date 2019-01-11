import React,{Component} from "react"
import {getheaderbar} from "../model"
class Headerbar extends Component {
	render(){
		return <div id="headerbar">
        <ul>
        99999999
        {
            this.state.datalist.map(item=>
                <li key={item.categoryId}>{item.categoryName}</li>
                )
        }
			
                
            </ul>
		</div>
    }
    constructor(props){
        super(props)
        this.state = {
            datalist:[]
        }
    }
    componentDidMount(){

		getheaderbar().then(res=>{
      console.log(res.body.categories,9990)
      this.setState({
        datalist:res.body.categories
        // logoId:this.state.datalist.splice()
      })
		})//then	 
  }//componentWillMountimport 
    
}

export default Headerbar