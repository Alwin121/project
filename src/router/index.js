import {
	HashRouter as Router ,// HashRouter（hash）  /#/home     BrowserRouter(history) /home
	Switch, // 匹配到第一个符合的路由 就停止匹配
	Route,  //路由组件
	Redirect //重定向组件  
} from "react-router-dom"
import App from "../App"
import Barand from "../views/barand"
import Silo from "../views/silo"
import women from "../views/silo/women"
import men from "../views/silo/men"
import cosmetics from "../views/silo/cosmetics"
import crossborder from "../views/silo/crossborder"
import kide from "../views/silo/kide"
import lifestyle from "../views/silo/lifestyle"
import upcoming from "../views/upcoming"
import Login from "../views/login"
import mobile from "../views/login/mobile"
import upcoming from "../views/upcoming"
import welcome from "../views/welcome"
import newmenbers from "../views/newmenbers"
import brand from "../views/brand"
import productlist from "../views/productlist"
import brandwall from "../views/brandwall"
import personalcenter from "../views/personalcenter"
import shoppingcar from "../views/shoppingcar"


const router = (

	<Provider store={store}>
	<Router>
		<App>
          <Switch>		  
			<Route path="/barand" component={Barand}/>
            <Route path="/silo/index" render={()=>
				<Silo>
				    <Switch>
						<Route path="/silo/women" component={women}/>
						<Route path="/silo/men" component={men}/>
						<Route path="/silo/cosmetics" component={cosmetics}/>
						<Route path="/silo/crossborder" component={crossborder}/>
						<Route path="/silo/kide" component={kide}/>
						<Route path="/silo/lifestyle" component={lifestyle}/>
                        <Redirect from="/silo" to="/silo/index"/>
					</Switch>
				</Silo>
			}/>
			<Route path="/upcoming" component={upcoming}/>
			
            <Route path="/login" render={()=>
				<Login>
				    <Switch>
						<Route path="/login/mobile" component={mobile}/>
					</Switch>
				</Login>
			}/>
            <Route path="/welcome" component={welcome}/>
            <Route path="/newmenbers" component={newmenbers}/>

			<Route path="/brand/:id" component={brand} exact/>
			<Route path="/productlist/:id" component={productlist} exact/>
			<Route path="/brandwall" component={brandwall}/>
			<Route path="/personalcenter" component={personalcenter}/>
			<Route path="/shoppingcar" component={shoppingcar}/>
			<Redirect from="*" to="/silo"/>
			</Switch>
		</App>
	</Router>
	</Provider>
)

export default router;