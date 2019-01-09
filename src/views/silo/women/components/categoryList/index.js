import React,{Component} from "react"
import {getList} from '../../model'
import './index.scss'

class CategoryList extends Component {
	constructor(props){
		super(props)

		this.state={
			ListInfo:[]
		}
	}
	render(){
		return <div className="categoryList">
        <div className="menu">
            <ul>
                {
                    this.state.ListInfo.map((item)=>
                        <li key={item.categoryTwoId}><img src={item.categoryImgStr} alt=""/></li>
                        )
                }
            </ul>
        </div>
		</div>
	}

	componentDidMount(){
		getList().then(res=>{
			this.setState({
				ListInfo:res[0].data
			})
			console.log(res[0].data)
		})
	}

}

export default CategoryList