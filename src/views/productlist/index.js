import React,{Component} from "react"
import {getProductlist} from "./model"
import Categoryid from "./categoryid"
import Headerbar from "../../components/top"
import "./index.scss"
import store from "../../store";
class Productlist extends Component {
	render(){
		return <div id="Productlist_headerbar">
       <Headerbar {...this.props}></Headerbar>
	   <header>
		   <ul>
		   {
				this.state.datalist.map((item,index)=>
					<li key={item} className= {this.state.current===index?'active2':''} onClick={this.handleClick.bind(this,index)}>{item}</li>
				)
			}
			   
		   </ul>
		   {this.state.looplist.length?<Categoryid name={this.state.looplist}></Categoryid>:null}
	   </header>
  {localStorage.getItem("name")}
		</div>
	}
	
	constructor(props) {
		super(props);
	  
		this.state = {
			datalist:["人气","折扣","价格","筛选"],
			current:0,
			looplist:[],
		    nameid:[]

		};
	  }
	  handleClick(index){
		  this.setState({
			current:index
		  })
		
	  }
    componentWillMount(){

		getProductlist(this.props.match.params.id).then(res=>{

// console.log(res.products,90909090909)
// console.log(res.eventName,90888888888888)
      this.setState({
		looplist:res.products,
		nameid:res.eventName
       
	  })
	  store.dispatch({
		type:"name",
		payload:res.eventName
	})
localStorage.setItem("name",this.state.nameid)
		})//then

		

        window.onscroll=this.handeleScroll.bind(this)
  }//componentWillMountimport 
  componentDidMount(){
	 
  }
  handeleScroll(){

  }
}

export default Productlist