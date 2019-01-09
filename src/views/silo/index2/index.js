import React,{Component} from "react"
import "./index.scss"
import axios from "axios"

class Index extends Component {
	constructor(props) { 
		super(props);
	  
		this.state = {
			banner:"",
			pic:"",
			datalist:[]
		};
	  }
	  componentDidMount(){
		axios({
			url:`http://www.mei.com/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5&credential=rO0ABXNyACdjb20ucmF5b28uY29tbW9uLnBvam8uVXNlckNyZWRlbnRpYWxzVm8AAAAAAAAAAQIAA0wACHBhc3N3b3JkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAJdXNlckVtYWlscQB%2BAAFMAAZ1c2VySWRxAH4AAXhwdABANDc3NTgxODY4YzAxYjkzMzdlMjE4MzY2NmE3YzdmNDY1MGUwOTU1MzlmZDc0OGRlNjFlOTg5MjUxMmYwOTFhOHQACzE4MzQyMjE0Nzc5dAATMjA4NDIwODQ5OTkwMDA5NDE1OA%3D%3D`,
			method:"get"
		}).then(res=>{
			//console.log(res.data.banners[0])
			this.setState({
				banner:res.data.banners[0]
			})
		})

		axios({
			url:`http://www.mei.com/appapi/home/newZoneEntrance/v3?credential=rO0ABXNyACdjb20ucmF5b28uY29tbW9uLnBvam8uVXNlckNyZWRlbnRpYWxzVm8AAAAAAAAAAQIAA0wACHBhc3N3b3JkdAASTGphdmEvbGFuZy9TdHJpbmc7TAAJdXNlckVtYWlscQB%2BAAFMAAZ1c2VySWRxAH4AAXhwdABANDc3NTgxODY4YzAxYjkzMzdlMjE4MzY2NmE3YzdmNDY1MGUwOTU1MzlmZDc0OGRlNjFlOTg5MjUxMmYwOTFhOHQACzE4MzQyMjE0Nzc5dAATMjA4NDIwODQ5OTkwMDA5NDE1OA%3D%3D`
		}).then(res=>{
			//console.log(res.data.img)
			this.setState({
				pic:res.data
			})
		})

		axios({
			url:`http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1546942566729&summary=ba15bb44512a794772ce0a8c7da059e2&platform_code=H5`
		}).then(res=>{
			console.log(res.data.lists)
			this.setState({
				datalist:res.data.lists

			})
		})

		axios({
			url:``
		})
	  }
	render(){
		//console.log(this);
		return <div>
<<<<<<< HEAD
			<div className="div_box">
				<img src={this.state.banner.main_image} />
				<p className="p_one">{this.state.banner.main_title}</p>
				<p className="p_two">{this.state.banner.sub_title}</p>
			</div>
			<div className="div_cneter">
				<img src={this.state.pic.img}/>
			</div>
			{
				this.state.datalist.map(item=>
					<div key={item.name} className="div_big">
						<h1>{item.name}</h1>
						{item.events.map(list=>
							<div key={list.categoryId} className="div_inside">
								<img src={list.imageUrl}/>
								<ul className="index_ul">
									<li className="index_li">{list.englishName}</li>
									<li className="index_li">{list.chineseName}</li>
									<li className="index_li">{list.discountText}</li>
								</ul>
							</div>
							)}
					</div>
					)
			}
=======
			
>>>>>>> fdd0f60060acaafb42febed8bc5620041e25d5cc
		</div>
		
	}
}

export default Index