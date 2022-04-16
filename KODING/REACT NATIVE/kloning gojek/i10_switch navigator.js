perbedaan StackNavigator Vs SwitchNavigator adalah 
- saat pidah halaman 'stack' memiliki back history, sedang 'switch' tidak
- 

====================== di app.js ========== ???? component
import react, { component } from 'react';					
import Router from '../src/config/rooter';

class App extends Component{	
	render(){
		return(
			<Router />	
			);
		}					
}
export default App;
====================== di pages/index.js ========== ???? apakah hanya export import yang bersangkutan saja
import Home from './Home';												
import Halaman2 from '/Halaman2';
import order from '/order';							// ha
import DetileOrder from '/DetileOrder';

export {
		Home,
		Halaman2
}
====================== di Home.js ========== ???? ada importnya nggak untuk kotak berita
class Home extends component {
	render(){
		return{
			<kotakberita propsOnPress= { () => { this.props.navigation.navigate('Halaman2') } } >
		}
	}
}
====================== kotakberita.js ========== ???? ada export nya kan
const kotakberita = ({propsOnpress}) => {
	return {
		<button onPress={propsOnPress} ></button> 					/	
	}
}
====================== di Halaman2.js ==========''
import react from 'react';
import {Text} from 'react-native';

const Halaman2 = () => {
	return{
			<Text > INI Halaman2 </text>
	}
}

export default Halaman2;
------------------------------------------------------ ini halaman switch
====================== di Order.js ==========''
import react from 'react';
import {Text, view, button} from 'react-native';

const Order = (props) => {
	return{
		<view>
			<Text > INI Order </text>
			<button tittle = KE DETAIL onPress={() => { alert ("halo tesst")} } />		// alert di ganti props.navigation.navigate('DetileOrder')
		</view>			//
	}
}

export default order;
====================== di OrderDetile.js ==========''
import react from 'react';
import {Text} from 'react-native';

const DetailOrder = () => {
	return{
			<Text > INI DetailOrder </text>
	}
}

export default detailorder;
------------------------------------------------------
export Halaman2;
====================== di navigator.js ==========
	import {createAppContainer, createSwitchNavigator} from 'react-navigation';				// 1. import juga switch
	import {createStackNavigator} from 'react-navigation-stack';
	import {Home, Halaman2, Order, DetileOrder} from '../../containers/pages';				// 

 const HomeStack = createStackNavigator (
	{
		Home,
		Halaman2,
	},
	{
		headerMode: 'none'																		
		initialRouteName : 'Home'			
	}
 )

 const OrderStack = createStackNavigator (					// 4. kita punya beberapa stacknav
	{
		Order,
		DetileOrder,
	},
	{
		headerMode: 'none'																		
		initialRouteName : 'Order'			
	}
 )

--------------
 const Router = createSwitchNavigator({						// 2. create switch
		{
			HomeStack,
			OrderStack										// 3. manggil Home diatas										
		},
		{
			headerMode: 'none'							
			initialRouteName : 'OrderStack'				
		}
	});
---
	export default createAppContainer(Router);


