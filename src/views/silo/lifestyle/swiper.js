import React,{Component} from "react"
import {getSwiper} from "./model"
import { Carousel, WingBlank } from 'antd-mobile';
import "./index.scss"

class Swiper extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgHeight: 364,
      datalist:[],
      logoId:''

    }
  }
      render() {
        return (
          <div id="swiper">
     
                <WingBlank>
                <Carousel
                  autoplay={true}
                  infinite={true}
                  autoplayInterval={2000}
                >
                  {this.state.datalist.map(val => (
                    <a
                      key={val.id}
                      href={val.link_ur}
                      style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <div className="title">
                    <h1>{val.main_title}</h1>
                    <p>{val.sub_title}</p>
                    <p>{val.description}</p>
                    </div>
                    
                      <img
                        src={val.main_image}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                          // fire window resize event to change height
                          window.dispatchEvent(new Event('resize'));
                          this.setState({ imgHeight: 'auto' });
                        }}
                        onClick={this.handleClick.bind(this,val.link_url)}
                      />
                    </a>
                  ))}
                </Carousel>
              </WingBlank>
       
        

          </div>

        );
      }
   //asios请求
    componentWillMount(){

		getSwiper().then(res=>{
      // console.log(res[1].link_url.split('/')[4])
      this.setState({
        datalist:res
        // logoId:this.state.datalist.splice()
      })
		})//then	 
  }//componentWillMountimport 
  handleClick(id){
    console.log(id);
    console.log(this.props);
    this.setState({
      logoId:id.split('/')[4]
    })
    this.props.history.push(`/brand/${id}`);
  }
}

export default Swiper