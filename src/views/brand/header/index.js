import React,{Component} from "react"
import {getheaderbar} from "../model"
import Categoryid from "./categoryid"
import "./index.scss"
class Headerbar extends Component {
	render(){
		return <div id="headerbar">
        <div>
        <ul className={this.state.isShow?"move2":''}>
        {
            this.state.datalist.map(item=>
                <li key={item.categoryId}>
             {item.categoryName}
                </li>
                )
        }
			
                
            </ul>

        </div>
        
            {this.state.looplist.length?<Categoryid name={this.state.looplist}></Categoryid>:null}
            {/* // <Categoryid name={this.state.looplist}></Categoryid> */}
       
		</div>
    }
    constructor(props){
        super(props)
        this.state = {
            datalist:[],
            looplist:[],
            isShow:false
            
        }
    }
    componentWillMount(){

		getheaderbar(this.props.id).then(res=>{
          
// console.log(res.body.categoryProducts,90909090909)
      this.setState({
        datalist:res.body.categories,
        looplist:res.body.categoryProducts
        // logoId:this.state.datalist.splice()
       
      })
        })//then	 
        window.onscroll=this.handeleScroll.bind(this)
  }//componentWillMountimport 
  

handeleScroll(){
    var a = document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop
    // console.log(a,99)
    var b = document.querySelector("#headerbar")
    var c = document.querySelector(".pic")
    var d = document.querySelector(".text")
    var e = document.querySelector(".bg")
    var f = c.offsetHeight+d.offsetHeight+e.offsetHeight
    var g = f-100
    // console.log(a,f,g,5656)
    if(a>=g){
       this.setState({
           isShow:true  
       })
       
    }else{
        this.setState({
            isShow:false
        })
    }
}
    
}

export default Headerbar